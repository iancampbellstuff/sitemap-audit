import axios from 'axios';
import { Table } from 'console-table-printer';
import { requestTestUrls } from '../urlUtils';
// TODO: import and use this file instead of using a helper method
// import emptySitemap from '../__mocks__/emptySitemap.xml';
import { getEmptySitemap } from '../__mocks__/sitemap';

describe('urlUtils', () => {
    const emptySitemap = getEmptySitemap();
    describe('requestTestUrls', () => {
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
