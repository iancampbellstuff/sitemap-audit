import { Table } from 'console-table-printer';
import { DOMParser } from 'xmldom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getEnvironmentVariables } from '../utils/envUtils';

export type UrlResponse = AxiosResponse<string, any>;
export interface ISitemapNode {
    children?: ISitemapNode[];
    level?: number;
    parentNode?: ISitemapNode;
    status: number;
    statusText: string;
    url: string;
    xml?: Document;
}

const { SITEMAP_URL, TARGET_BASE_URL, URL_COUNT_THRESHOLD } = getEnvironmentVariables();

export class Sitemap {
    private static readonly XML_FILE_EXTENSION = '.xml';
    private readonly parser: DOMParser;
    private readonly table: Table;
    private rootNode!: ISitemapNode;
    private count: number;

    /**
     * Instantiate the instance.
     */
    private constructor() {
        this.parser = new DOMParser({
            errorHandler: {
                error: (error) => {
                    // Suppressing these errors on npm test - [xmldom error] element parse error: Error: invalid attribute
                    if (typeof error === 'string' && !error?.trim().includes('invalid attribute')) {
                        console.error(error);
                    }
                },
                fatalError: (error) => console.error(error),
                warning: () => { }
            }
        });
        this.table = new Table({
            columns: [
                { name: 'status', alignment: 'center' },
                { name: 'statusText', alignment: 'left' },
                { name: 'url', alignment: 'left' },
                { name: 'level', alignment: 'center' },
                { name: 'parentUrl', alignment: 'left' }
            ],
            // Sorting status codes descending, to show errors first
            sort: (row1, row2) => row2.status - row1.status ||
                // Sorting row levels ascending, to show highest levels first
                row1.level - row2.level ||
                // Sorting parent URLs ascending
                (row1.parentUrl || '').localeCompare(row2.parentUrl || '')

        });
        this.count = 0;
    }

    /**
     * This static method replaces the base URL of a given URL, if the TARGET_BASE_URL environment variable is set.
     *
     * @param sitemapUrl a given URL to be refactored
     * @returns a new URL if TARGET_BASE_URL is defined, else return the given URL
     */
    private static getNewUrl(sitemapUrl: string): string {
        if (TARGET_BASE_URL) {
            const baseUrl = SITEMAP_URL.substring(0, sitemapUrl.indexOf('/', 8));
            sitemapUrl = sitemapUrl.replace(baseUrl, TARGET_BASE_URL);
        }
        return sitemapUrl;
    }

    /**
     * This static method is to be used as an axios GET catch error handler, resolving errors to be handled the same as a success response.
     *
     * @param error an error to be handled, thrown from an axios GET call
     * @returns an axios response to be handled
     * @throws a given error if it isn't an axios error
     */
    private static async onRejectedGetUrlHandler(error: AxiosError | Error): Promise<UrlResponse> {
        if (axios.isAxiosError(error)) {
            let status: number;
            let statusText: string;
            let url: string;
            if (error.response != null) {
                status = error.response.status;
                statusText = error.response.statusText;
                url = error.response.config.url as string;
            } else {
                status = error.status as number;
                statusText = error.message;
                url = error.config?.url || error.request?.responseURL as string;
            }
            const urlResponse: UrlResponse = {
                config: {
                    url
                },
                data: '',
                headers: {},
                status,
                statusText
            };
            return await Promise.resolve(urlResponse);
        } else {
            console.error(error);
            throw error;
        }
    }

    private static async getUrl(sitemapUrl: string): Promise<UrlResponse> {
        const url = Sitemap.getNewUrl(sitemapUrl);
        const response = await axios.get<string>(url).catch(Sitemap.onRejectedGetUrlHandler);
        return response;
    }

    private async getNode(sitemapUrl: string): Promise<ISitemapNode> {
        const response = await Sitemap.getUrl(sitemapUrl);
        const { status, statusText } = response;
        const url = response.config.url ?? response.request?.responseURL as string;
        const node: ISitemapNode = {
            status,
            statusText,
            url
        };
        if (sitemapUrl.endsWith(Sitemap.XML_FILE_EXTENSION) && status === 200) {
            const xml = this.parser.parseFromString(response.data, 'text/xml');
            if (xml) {
                node.xml = xml;
                const sitemapIsEmpty = !xml.hasChildNodes() || xml.getElementsByTagName('loc').length === 0;
                if (sitemapIsEmpty) {
                    // See https://www.rfc-editor.org/rfc/rfc4918#section-11.2
                    node.status = 422;
                    node.statusText = 'Empty Sitemap';
                }
            }
        }
        return node;
    }

    private async setChildNode(sitemapUrl: string, parentNode: ISitemapNode, level: number): Promise<ISitemapNode> {
        const childNode = await this.getNode(sitemapUrl);
        childNode.parentNode = parentNode;
        if (!parentNode.children) {
            parentNode.children = [];
        }
        parentNode.children.push(childNode);
        childNode.level = level;
        return childNode;
    }

    private static getElements(node: ISitemapNode): Element[] {
        const xml = node.xml as Document;
        let elements: Element[] = [];
        if (xml) {
            elements = [
                // Sitemap index file
                ...Array.from(xml.getElementsByTagName('sitemap')),
                // Sitemap file
                ...Array.from(xml.getElementsByTagName('url'))
            ];
        }
        return elements;
    };

    private async setChildren(node: ISitemapNode, level: number = 0): Promise<void> {
        node.level = level;
        if (this.count++ >= URL_COUNT_THRESHOLD) {
            return;
        }
        if (!node.url.endsWith(Sitemap.XML_FILE_EXTENSION)) {
            return;
        }
        if (node.status !== 200) {
            return;
        }
        const elements = Sitemap.getElements(node);
        for (const element of elements) {
            if (this.count++ >= URL_COUNT_THRESHOLD) {
                break;
            }
            // Both sitemap index and sitemap files
            const loc = element.getElementsByTagName('loc')[0];
            const url = loc.textContent?.trim();
            // TODO: set a new node child if url is undefined
            if (url !== undefined) {
                const childNode = await this.setChildNode(url, node, level + 1);
                // Sitemap index file
                if (url.endsWith(Sitemap.XML_FILE_EXTENSION)) {
                    // Recursive sitemap iteration
                    await this.setChildren(childNode, level + 1);
                    continue;
                }
                // Sitemap file
                const linkElements = Array.from(element.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link'));
                for (const linkElement of linkElements) {
                    if (this.count++ >= URL_COUNT_THRESHOLD) {
                        break;
                    }
                    const href = linkElement.getAttribute('href')?.trim();
                    // TODO: set a new child node if rows does not contain href
                    if (href !== undefined) {
                        await this.setChildNode(href, childNode, level + 2);
                    }
                }
            }
        }
    }

    public static async getInstanceOf(): Promise<Sitemap> {
        const instance = new Sitemap();
        const node = await instance.getNode(SITEMAP_URL);
        await instance.setChildren(node);
        instance.rootNode = node;
        return instance;
    }

    private flatMap(node: ISitemapNode = this.rootNode): ISitemapNode[] {
        const nodes: ISitemapNode[] = [];
        nodes.push(node);
        if (node.children) {
            for (const childNode of node.children) {
                const grandchildNodes = this.flatMap(childNode);
                nodes.push(...grandchildNodes);
            }
        }
        return nodes;
    }

    public printAudit(): void {
        const nodes = this.flatMap();
        for (const node of nodes) {
            const { level, parentNode, status, statusText, url } = node;
            const data = {
                status,
                statusText,
                url,
                level,
                parentUrl: parentNode?.url || ''
            };
            const options = {
                color: (() => {
                    switch (status) {
                        case 200: {
                            return 'green';
                        }
                        case 422: {
                            return 'yellow';
                        }
                        default: {
                            return 'red';
                        }
                    }
                })()
            };
            this.table.addRow(data, options);
        }
        this.table.printTable();
    }
}
