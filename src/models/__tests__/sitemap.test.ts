/* eslint-disable @typescript-eslint/dot-notation */
import axios, { AxiosError } from 'axios';
import { Table } from 'console-table-printer';
import { DOMParser } from 'xmldom';
import { ISitemapNode, Sitemap, UrlResponse } from '../sitemap';
// TODO: import and use these files instead of using helper methods
// import emptySitemap from '../__mocks__/emptySitemap.xml';
// import sitemap from '../__mocks__/sitemap.xml';
// import sitemapIndex from '../__mocks__/sitemapIndex.xml';
import { getEmptySitemap, getSitemap } from '../__mocks__/sitemap';

jest.mock('../../utils/envUtils', () => ({
    getEnvironmentVariables: () => ({
        SITEMAP_URL: 'https://www.google.com/sitemap.xml',
        // TARGET_BASE_URL: 'https://www.google-dev-environment.com',
        URL_COUNT_THRESHOLD: 100
    })
}));

describe('sitemap', () => {
    const SITEMAP_URL = 'https://www.google.com/sitemap.xml';
    // const TARGET_BASE_URL = 'https://www.google-dev-environment.com';
    const URL_COUNT_THRESHOLD = 100;
    const emptySitemap = getEmptySitemap();
    const sitemap = getSitemap();
    // const sitemapIndex = getSitemapIndex();
    describe('Sitemap', () => {
        const mockResponse = (status: number, url: string = SITEMAP_URL, data: string = ''): UrlResponse | AxiosError => {
            const axiosGetSpy: jest.SpyInstance = jest.spyOn(axios, 'get');
            const response = {
                config: {
                    url
                },
                data,
                headers: {},
                status,
                statusText
            } as any as UrlResponse | AxiosError;
            axiosGetSpy.mockResolvedValue(response);
            if (status !== 200) {
                jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);
            }
            return response;
        };
        const testError = new Error('test error');
        const statusText = 'Test Status Text';
        it('should be defined', async () => {
            expect(Sitemap['XML_FILE_EXTENSION']).toEqual('.xml');
            const instance = await Sitemap.getInstanceOf();
            expect(instance['parser']).toBeInstanceOf(DOMParser);
            expect(instance['table']).toBeInstanceOf(Table);
            expect(instance['table'].table.columns).toEqual([
                {
                    alignment: 'center',
                    name: 'status',
                    title: 'status'
                },
                {
                    alignment: 'left',
                    name: 'statusText',
                    title: 'statusText'
                },
                {
                    alignment: 'left',
                    name: 'url',
                    title: 'url'
                },
                {
                    alignment: 'center',
                    name: 'level',
                    title: 'level'
                },
                {
                    alignment: 'left',
                    name: 'parentUrl',
                    title: 'parentUrl'
                }
            ]);
            expect(instance['table'].table.sortFunction({ status: 200 }, { status: 204 })).toEqual(4);
            expect(instance['rootNode']).toBeDefined();
            expect(instance['rootNode'].url).toEqual(SITEMAP_URL);
            expect(instance['count']).toEqual(1);
        });
        describe('getNewUrl', () => {
            let getNewUrl: (url: string) => string;
            beforeEach(() => {
                getNewUrl = Sitemap['getNewUrl'];
            });
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should return the given URL if TARGET_BASE_URL is undefined', () => {
                expect(getNewUrl(SITEMAP_URL)).toEqual(SITEMAP_URL);
            });
            // TODO: mock defining TARGET_BASE_URL
            // it('should replace the base URL in a given URL if TARGET_BASE_URL is defined', () => {
            //     jest.spyOn(envUtils, 'getEnvironmentVariables').mockReturnValue({
            //         SITEMAP_URL,
            //         TARGET_BASE_URL,
            //         URL_COUNT_THRESHOLD
            //     });
            //     expect(getNewUrl(SITEMAP_URL)).toEqual(`${TARGET_BASE_URL}/sitemap.xml`);
            // });
        });
        describe('onRejectedGetUrlHandler', () => {
            let status: number;
            let onRejectedGetUrlHandler: (error: AxiosError | Error) => Promise<UrlResponse>;
            beforeEach(() => {
                status = 500;
                onRejectedGetUrlHandler = Sitemap['onRejectedGetUrlHandler'];
            });
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should handle an axios error with response', () => {
                jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);
                const error = {
                    response: {
                        config: {
                            url: SITEMAP_URL
                        },
                        status,
                        statusText
                    }
                } as any as AxiosError;
                expect(onRejectedGetUrlHandler(error)).resolves.toEqual({
                    config: {
                        url: SITEMAP_URL
                    },
                    data: '',
                    headers: {},
                    status,
                    statusText
                });
            });
            it('should handle axios error with a config url', () => {
                const error = {
                    config: {
                        url: SITEMAP_URL
                    },
                    message: statusText,
                    status
                } as any as AxiosError;
                expect(onRejectedGetUrlHandler(error)).resolves.toEqual({
                    config: {
                        url: SITEMAP_URL
                    },
                    data: '',
                    headers: {},
                    status,
                    statusText
                });
            });
            it('should handle axios error with a request response URL', () => {
                const error = {
                    message: statusText,
                    request: {
                        responseURL: SITEMAP_URL
                    },
                    status
                } as any as AxiosError;
                expect(onRejectedGetUrlHandler(error)).resolves.toEqual({
                    config: {
                        url: SITEMAP_URL
                    },
                    data: '',
                    headers: {},
                    status,
                    statusText
                });
            });
            it('should throw an error if not an axios error', async () => {
                try {
                    await onRejectedGetUrlHandler(testError);
                } catch (error) {
                    expect(error).toEqual(testError);
                }
            });
        });
        describe('getUrl', () => {
            let getUrl: (sitemapUrl: string) => Promise<UrlResponse>;
            beforeEach(() => {
                getUrl = Sitemap['getUrl'];
            });
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should get a successful response', () => {
                const response = mockResponse(200);
                expect(getUrl(SITEMAP_URL)).resolves.toEqual(response);
            });
            it('should handle an axios error', () => {
                const response = mockResponse(500);
                expect(getUrl(SITEMAP_URL)).resolves.toEqual(response);
            });
            it('should throw an error if not successful and not an axios error', async () => {
                jest.spyOn(axios, 'get').mockRejectedValueOnce(testError);
                try {
                    await getUrl(SITEMAP_URL);
                } catch (error) {
                    expect(error).toEqual(testError);
                }
            });
        });
        describe('getNode', () => {
            const url = 'https://www.testing.test';
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should get a successful response', async () => {
                const status = 200;
                mockResponse(status, url, sitemap);
                const instance = await Sitemap.getInstanceOf();
                const result = await instance['getNode'](url);
                expect(result).toEqual({
                    status,
                    statusText,
                    url
                });
            });
            it('should get an error response', async () => {
                const status = 500;
                mockResponse(status, url, sitemap);
                const instance = await Sitemap.getInstanceOf();
                const result = await instance['getNode'](url);
                expect(result).toEqual({
                    status,
                    statusText,
                    url
                });
            });
            it('should get a successful XML response', async () => {
                const status = 200;
                mockResponse(status, SITEMAP_URL, sitemap);
                const instance = await Sitemap.getInstanceOf();
                const result = await instance['getNode'](SITEMAP_URL);
                expect(result).toEqual({
                    status,
                    statusText,
                    url: SITEMAP_URL,
                    xml: expect.any(Object)
                });
            });
            it('should get an empty sitemap response', async () => {
                mockResponse(200, SITEMAP_URL, emptySitemap);
                const instance = await Sitemap.getInstanceOf();
                const result = await instance['getNode'](SITEMAP_URL);
                expect(result).toEqual({
                    status: 422,
                    statusText: 'Empty Sitemap',
                    url: SITEMAP_URL,
                    xml: expect.any(Object)
                });
            });
        });
        describe('setChildNode', () => {
            const url = 'https://www.testing.test';
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should get a successful response', async () => {
                const status = 200;
                mockResponse(status, url);
                const instance = await Sitemap.getInstanceOf();
                const parentNode = {
                    level: 0,
                    status: 200,
                    statusText,
                    url: SITEMAP_URL,
                    xml: {} as any
                };
                const result = await instance['setChildNode'](url, parentNode, 0);
                const expected = {
                    level: 0,
                    parentNode: expect.any(Object as any as ISitemapNode),
                    status,
                    statusText,
                    url
                };
                expect(result).toEqual(expected);
                expect(result.parentNode).toEqual(parentNode);
            });
            it('should get an error response', async () => {
                const status = 500;
                mockResponse(status, url);
                const instance = await Sitemap.getInstanceOf();
                const parentNode = {
                    level: 0,
                    status: 200,
                    statusText,
                    url: SITEMAP_URL,
                    xml: {} as any
                };
                const result = await instance['setChildNode'](url, parentNode, 0);
                const expected = {
                    level: 0,
                    parentNode: expect.any(Object as any as ISitemapNode),
                    status,
                    statusText,
                    url
                };
                expect(result).toEqual(expected);
                expect(result.parentNode).toEqual(parentNode);
            });
        });
        describe('getElements', () => {
            it('should get an array of elements for a given node with xml', async () => {
                const url = 'https://www.testing.test';
                const testSitemap = `
                    <?xml version="1.0" encoding="UTF-8"?>
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                        xmlns:xhtml="http://www.w3.org/1999/xhtml">
                        <url>
                            <loc>${url}</loc>
                            <xhtml:link href="${url}" hreflang="ar" rel="alternate"/>
                        </url>
                    </urlset>
                `;
                const instance = await Sitemap.getInstanceOf();
                const xml = instance['parser'].parseFromString(testSitemap);
                const node = {
                    status: 200,
                    statusText,
                    url: SITEMAP_URL,
                    xml
                };
                const result = Sitemap['getElements'](node);
                expect(result).toBeInstanceOf(Array<Element>);
                expect(result).toHaveLength(1);
            });
            it('should return an empty array for a given node with no xml', () => {
                const node = {
                    status: 200,
                    statusText,
                    url: SITEMAP_URL
                };
                const result = Sitemap['getElements'](node);
                expect(result).toEqual([]);
            });
        });
        describe('setChildren', () => {
            const url = 'https://www.testing.test';
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should not set children if the instance count exceeds the URL count threshold', async () => {
                const instance = await Sitemap.getInstanceOf();
                const node: ISitemapNode = {
                    status: 200,
                    statusText,
                    url: SITEMAP_URL
                };
                instance['count'] = URL_COUNT_THRESHOLD + 1;
                await instance['setChildren'](node);
                expect(node.children).toBeUndefined();
            });
            it('should not set children if the given node URL is not an XML file', async () => {
                const instance = await Sitemap.getInstanceOf();
                const node: ISitemapNode = {
                    status: 200,
                    statusText,
                    url
                };
                await instance['setChildren'](node);
                expect(node.children).toBeUndefined();
            });
            it('should not set children if the given node status is not 200', async () => {
                const instance = await Sitemap.getInstanceOf();
                const node: ISitemapNode = {
                    status: 500,
                    statusText,
                    url
                };
                await instance['setChildren'](node);
                expect(node.children).toBeUndefined();
            });
            it('should set children', async () => {
                const status = 200;
                const testSitemap = `
                    <?xml version="1.0" encoding="UTF-8"?>
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                        xmlns:xhtml="http://www.w3.org/1999/xhtml">
                        <url>
                            <loc>${url}</loc>
                            <xhtml:link href="${url}" hreflang="ar" rel="alternate"/>
                        </url>
                    </urlset>
                `;
                mockResponse(status, SITEMAP_URL, testSitemap);
                const instance = await Sitemap.getInstanceOf();
                const xml = instance['parser'].parseFromString(testSitemap);
                const node: ISitemapNode = {
                    status,
                    statusText,
                    url: SITEMAP_URL,
                    xml
                };
                await instance['setChildren'](node);
                expect(node.children).toBeInstanceOf(Array<ISitemapNode>);
                expect(node.children).toHaveLength(1);
                expect(node.children).toEqual([
                    {
                        children: expect.any(Array<ISitemapNode>),
                        level: 1,
                        parentNode: expect.any(Object as any as ISitemapNode),
                        status,
                        statusText,
                        url: SITEMAP_URL
                    }
                ]);
            });
        });
        describe('getInstanceOf', () => {
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should get an instance', async () => {
                const status = 200;
                mockResponse(status);
                const instance = await Sitemap.getInstanceOf();
                expect(instance['rootNode']).toEqual({
                    level: 0,
                    status,
                    statusText,
                    url: SITEMAP_URL
                });
            });
            it('should get an instance with an XML response', async () => {
                const status = 200;
                mockResponse(status, SITEMAP_URL, sitemap);
                const instance = await Sitemap.getInstanceOf();
                expect(instance['rootNode']).toEqual({
                    children: expect.any(Array<ISitemapNode>),
                    level: 0,
                    status,
                    statusText,
                    url: SITEMAP_URL,
                    xml: expect.any(Object)
                });
            });
        });
        describe('flatMap', () => {
            const status = 200;
            const url = 'https://www.testing.test';
            const testSitemap = `
                <?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                    xmlns:xhtml="http://www.w3.org/1999/xhtml">
                    <url>
                        <loc>${url}</loc>
                        <xhtml:link href="${url}" hreflang="ar" rel="alternate"/>
                    </url>
                </urlset>
            `;
            const grandparentNode = {
                children: expect.any(Array<ISitemapNode>),
                level: 0,
                status,
                statusText,
                url: SITEMAP_URL,
                xml: expect.any(Object)
            };
            const parentNode = {
                children: expect.any(Array<ISitemapNode>),
                level: 1,
                parentNode: expect.any(Object as any as ISitemapNode),
                status,
                statusText,
                url: SITEMAP_URL
            };
            const childNode = {
                level: 2,
                parentNode: expect.any(Object as any as ISitemapNode),
                status,
                statusText,
                url: SITEMAP_URL
            };
            beforeEach(() => {
                mockResponse(status, SITEMAP_URL, testSitemap);
            });
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should get an array from the default root node', async () => {
                const instance = await Sitemap.getInstanceOf();
                const result = instance['flatMap']();
                expect(result).toHaveLength(3);
                expect(result).toEqual([
                    grandparentNode,
                    parentNode,
                    childNode
                ]);
            });
            it('should get an array from a given node', async () => {
                const instance = await Sitemap.getInstanceOf();
                const result = instance['flatMap']({
                    ...grandparentNode,
                    children: [
                        {
                            ...parentNode,
                            children: [
                                {
                                    ...childNode,
                                    parentNode
                                }
                            ],
                            parentNode: grandparentNode
                        }
                    ]
                });
                expect(result).toHaveLength(3);
                expect(result).toEqual([
                    grandparentNode,
                    parentNode,
                    childNode
                ]);
            });
        });
        describe('printAudit', () => {
            const url = 'https://www.testing.test';
            const testSitemap = `
                <?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                    xmlns:xhtml="http://www.w3.org/1999/xhtml">
                    <url>
                        <loc>${url}</loc>
                        <xhtml:link href="${url}" hreflang="ar" rel="alternate"/>
                    </url>
                </urlset>
            `;
            afterEach(() => {
                jest.clearAllMocks();
            });
            it('should print status for successful responses', async () => {
                const status = 200;
                mockResponse(status, SITEMAP_URL, testSitemap);
                const instance = await Sitemap.getInstanceOf();
                const table = instance['table'];
                const addRow = jest.spyOn(table, 'addRow');
                const printTable = jest.spyOn(table, 'printTable');
                instance['printAudit']();
                expect(addRow).toHaveBeenCalledTimes(3);
                expect(addRow).toHaveBeenNthCalledWith(1, {
                    level: 0,
                    parentUrl: '',
                    status,
                    statusText,
                    url: SITEMAP_URL
                }, {
                    color: 'green'
                });
                expect(addRow).toHaveBeenNthCalledWith(2, {
                    level: 1,
                    parentUrl: SITEMAP_URL,
                    status,
                    statusText,
                    url: SITEMAP_URL
                }, {
                    color: 'green'
                });
                expect(addRow).toHaveBeenNthCalledWith(3, {
                    level: 2,
                    parentUrl: SITEMAP_URL,
                    status,
                    statusText,
                    url: SITEMAP_URL
                }, {
                    color: 'green'
                });
                expect(printTable).toHaveBeenCalled();
            });
            it('should print status for error responses', async () => {
                const status = 500;
                mockResponse(status, SITEMAP_URL, testSitemap);
                const instance = await Sitemap.getInstanceOf();
                const table = instance['table'];
                const addRow = jest.spyOn(table, 'addRow');
                const printTable = jest.spyOn(table, 'printTable');
                instance['printAudit']();
                expect(addRow).toHaveBeenCalledTimes(1);
                expect(addRow).toHaveBeenNthCalledWith(1, {
                    level: 0,
                    parentUrl: '',
                    status,
                    statusText,
                    url: SITEMAP_URL
                }, {
                    color: 'red'
                });
                expect(printTable).toHaveBeenCalled();
            });
            it('should print status for empty sitemap responses', async () => {
                mockResponse(200, SITEMAP_URL, emptySitemap);
                const instance = await Sitemap.getInstanceOf();
                const table = instance['table'];
                const addRow = jest.spyOn(table, 'addRow');
                const printTable = jest.spyOn(table, 'printTable');
                instance['printAudit']();
                expect(addRow).toHaveBeenCalledTimes(1);
                expect(addRow).toHaveBeenNthCalledWith(1, {
                    level: 0,
                    parentUrl: '',
                    status: 422,
                    statusText: 'Empty Sitemap',
                    url: SITEMAP_URL
                }, {
                    color: 'yellow'
                });
                expect(printTable).toHaveBeenCalled();
            });
        });
    });
});
