import { DOMParser } from 'xmldom';
import { Table } from 'console-table-printer';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getEnvironmentVariables } from '../utils';

type UrlResponse = AxiosResponse<string, any>;
export type UrlStatusRowData = {
    status: number;
    statusText: string;
    url: string;
};
export type UrlStatusRowOptions = {
    color: string;
};
export interface IUrlStatusRow {
    data: UrlStatusRowData;
    options: UrlStatusRowOptions;
}

const { SITEMAP_URL, TARGET_BASE_URL, URL_COUNT_THRESHOLD } = getEnvironmentVariables();
const parser = new DOMParser({
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

export class SitemapHandler {
    private static readonly XML_FILE_EXTENSION = '.xml';
    private readonly table: Table;
    private readonly urlStatusRows: IUrlStatusRow[];

    /**
     * Instantiate the instance.
     */
    constructor() {
        this.table = new Table({
            columns: [
                { name: 'status', alignment: 'center' },
                { name: 'statusText', alignment: 'left' },
                { name: 'url', alignment: 'left' }
            ],
            // Sorting status codes descending, to show errors first
            sort: (row1, row2) => row2.status - row1.status
        });
        this.urlStatusRows = [];
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

    /**
     * This static method replaces the base URL of a given URL, if the TARGET_BASE_URL environment variable is set.
     *
     * @param url a given URL to be refactored
     * @returns a new URL if TARGET_BASE_URL is defined, else return the given URL
     */
    private static getNewUrl(url: string): string {
        if (TARGET_BASE_URL) {
            const baseUrl = SITEMAP_URL.substring(0, url.indexOf('/', 8));
            url = url.replace(baseUrl, TARGET_BASE_URL);
        }
        return url;
    }

    private static getUrlStatusRow(response: UrlResponse, sitemapIsEmpty?: boolean): IUrlStatusRow {
        const { status, statusText } = response;
        const url = response.config.url ?? response.request.responseURL as string;
        let urlStatusRow: IUrlStatusRow;
        if (sitemapIsEmpty) {
            urlStatusRow = {
                data: {
                    // See https://www.rfc-editor.org/rfc/rfc4918#section-11.2
                    status: 422,
                    statusText: 'Empty Sitemap',
                    url
                },
                options: {
                    color: 'yellow'
                }
            };
        } else {
            urlStatusRow = {
                data: {
                    status,
                    statusText,
                    url
                },
                options: {
                    color: status === 200 ? 'green' : 'red'
                }
            };
        }
        return urlStatusRow;
    }

    private static async requestGetUrl(sitemapUrl: string): Promise<UrlResponse> {
        const url = SitemapHandler.getNewUrl(sitemapUrl);
        const response = await axios.get<string>(url).catch(SitemapHandler.onRejectedGetUrlHandler);
        return response;
    }

    private static async requestGetUrlStatusRow(sitemapUrl: string): Promise<IUrlStatusRow> {
        const response = await SitemapHandler.requestGetUrl(sitemapUrl);
        const urlStatusRow = SitemapHandler.getUrlStatusRow(response);
        return urlStatusRow;
    }

    private async requestSetUrlStatusRows(sitemapUrl: string = SITEMAP_URL): Promise<void> {
        if (this.urlStatusRows.length >= URL_COUNT_THRESHOLD) {
            return;
        }
        if (!sitemapUrl.endsWith(SitemapHandler.XML_FILE_EXTENSION)) {
            const urlStatusRow = await SitemapHandler.requestGetUrlStatusRow(sitemapUrl);
            this.urlStatusRows.push(urlStatusRow);
            return;
        }
        const response = await SitemapHandler.requestGetUrl(sitemapUrl);
        const sitemap = parser.parseFromString(response.data, 'text/xml');
        const sitemapIsEmpty = !sitemap.hasChildNodes() || sitemap.getElementsByTagName('loc').length === 0;
        const urlStatusRow = SitemapHandler.getUrlStatusRow(response, sitemapIsEmpty);
        this.urlStatusRows.push(urlStatusRow);
        if (response.status !== 200) {
            return;
        }
        const elements = [
            // Sitemap index file
            ...Array.from(sitemap.getElementsByTagName('sitemap')),
            // Sitemap file
            ...Array.from(sitemap.getElementsByTagName('url'))
        ];
        for (const element of elements) {
            if (this.urlStatusRows.length >= URL_COUNT_THRESHOLD) {
                break;
            }
            // Both sitemap index and sitemap files
            const loc = element.getElementsByTagName('loc')[0];
            const url = loc.textContent?.trim();
            // TODO: set a new instance of IUrlStatusRow if url is undefined
            if (url !== undefined) {
                // Sitemap index file
                if (url.endsWith(SitemapHandler.XML_FILE_EXTENSION)) {
                    // Recursive sitemap iteration
                    await this.requestSetUrlStatusRows(url);
                    continue;
                }
                // Sitemap file
                const urlStatusRow = await SitemapHandler.requestGetUrlStatusRow(url);
                this.urlStatusRows.push(urlStatusRow);
                const linkElements = Array.from(element.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link'));
                for (const linkElement of linkElements) {
                    if (this.urlStatusRows.length >= URL_COUNT_THRESHOLD) {
                        break;
                    }
                    const href = linkElement.getAttribute('href')?.trim();
                    // TODO: set a new instance of IUrlStatusRow if rows does not contain href
                    if (href !== undefined) {
                        const urlStatusRow = await SitemapHandler.requestGetUrlStatusRow(href);
                        this.urlStatusRows.push(urlStatusRow);
                    }
                }
            }
        }
    }

    public async requestPrintUrlStatusTable(): Promise<void> {
        if (this.urlStatusRows.length === 0) {
            await this.requestSetUrlStatusRows();
        }
        for (const urlStatusRow of this.urlStatusRows) {
            const { data, options } = urlStatusRow;
            this.table.addRow(data, options);
        }
        this.table.printTable();
    }
}
