/* eslint-disable @typescript-eslint/dot-notation */
import axios, { AxiosError } from 'axios';
import { Table } from 'console-table-printer';
import { DOMParser } from 'xmldom';
import { Sitemap, UrlResponse } from '../sitemap';
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
        // describe('setChildNode', () => {
        //     let setChildNode: (sitemapUrl: string, parentNode: ISitemapNode, level: number) => Promise<ISitemapNode>;
        //     beforeEach(() => {
        //         setChildNode = Sitemap['setChildNode'];
        //     });
        //     afterEach(() => {
        //         jest.clearAllMocks();
        //     });
        //     it('should get a successful response', () => {
        //         const response = mockResponse(200);
        //         expect(setChildNode(SITEMAP_URL)).resolves.toEqual(response);
        //     });
        // });
    });
});
