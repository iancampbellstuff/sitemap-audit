import axios, { AxiosError } from 'axios';
import { Table } from 'console-table-printer';
import { getOnRejectedUrlHandler, requestTestUrls } from '../urlUtils';
// TODO: import and use this file instead of using a helper method
// import emptySitemap from '../__mocks__/emptySitemap.xml';
import { getEmptySitemap } from '../__mocks__/sitemap';

jest.mock('../envUtils', () => ({
    getEnvironmentVariables: () => ({
        SITEMAP_URL: 'https://www.google.com/sitemap.xml',
        URL_COUNT_THRESHOLD: 100
    })
}));

describe('urlUtils', () => {
    describe('getOnRejectedUrlHandler', () => {
        const status = 500;
        const statusText = 'Internal Server Error';
        const url = 'https://testing.test';
        let isAxiosError;
        beforeEach(() => {
            isAxiosError = jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('should handle an axios error with a response', async () => {
            const error = {
                response: {
                    config: {
                        url
                    },
                    status,
                    statusText
                }
            } as any as AxiosError;
            const urlErrorHandler = await getOnRejectedUrlHandler(error);
            expect(urlErrorHandler).toEqual({
                config: {
                    url
                },
                data: '',
                headers: {},
                status,
                statusText
            });
        });
        it('should handle an axios error without a response', async () => {
            const error = {
                config: {
                    url
                },
                message: statusText,
                status
            } as any as AxiosError;
            const urlErrorHandler = await getOnRejectedUrlHandler(error);
            expect(urlErrorHandler).toEqual({
                config: {
                    url
                },
                data: '',
                headers: {},
                status,
                statusText
            });
        });
        it('should handle an axios error without a response and with a request response URL', async () => {
            const error = {
                message: statusText,
                request: {
                    responseURL: url
                },
                status
            } as any as AxiosError;
            const urlErrorHandler = await getOnRejectedUrlHandler(error);
            expect(urlErrorHandler).toEqual({
                config: {
                    url
                },
                data: '',
                headers: {},
                status,
                statusText
            });
        });
        it('should throw an error if the given error is not an axios error', async () => {
            isAxiosError.mockReturnValue(false);
            const testError = new Error('test error');
            try {
                await getOnRejectedUrlHandler(testError);
            } catch (error) {
                expect(error).toEqual(testError);
            }
        });
    });
    describe('requestTestUrls', () => {
        const emptySitemap = getEmptySitemap();
        let get;
        let addRow;
        let printTable;
        beforeEach(() => {
            get = jest.spyOn(axios, 'get').mockImplementation(async () => {
                const response = {
                    catch: () => { }
                };
                return await Promise.resolve(response);
            });
            addRow = jest.spyOn(Table.prototype, 'addRow');
            printTable = jest.spyOn(Table.prototype, 'printTable');
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('should test URLs and handle a success response', async () => {
            const url = 'https://www.test';
            const status = 200;
            const statusText = 'OK';
            get.mockResolvedValue({
                config: {
                    url
                },
                data: JSON.stringify(emptySitemap),
                status,
                statusText
            });
            await requestTestUrls([url]);
            expect(addRow).toHaveBeenCalledWith({
                status,
                statusText,
                url
            }, { color: 'green' });
            expect(printTable).toHaveBeenCalled();
        });
        it('should test URLs and handle an error response', async () => {
            const url = 'https://www.test';
            const status = 404;
            const statusText = 'Not Found';
            get.mockResolvedValue({
                config: {
                    url
                },
                data: JSON.stringify(emptySitemap),
                status,
                statusText
            });
            await requestTestUrls([url]);
            expect(addRow).toHaveBeenCalledWith({
                status,
                statusText,
                url
            }, { color: 'red' });
            expect(printTable).toHaveBeenCalled();
        });
    });
});
