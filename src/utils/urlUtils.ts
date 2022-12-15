import axios, { AxiosError, AxiosResponse } from 'axios';
import { Table } from 'console-table-printer';
import { getEnvironmentVariables, toggleAxiosErrors } from './';

type UrlResponse = AxiosResponse<string, any>;
type UrlRequest = Promise<UrlResponse>;
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

const { SITEMAP_URL, TARGET_BASE_URL } = getEnvironmentVariables();

/**
 * This function is to be used as an axios GET catch error handler, resolving errors to be handled the same as a success response.
 *
 * @param error an error to be handled, thrown from an axios GET call
 * @returns an axios response to be handled
 * @throws a given error if it isn't an axios error
 */
const requestGetUrlErrorHandler = async (error: Error | AxiosError): Promise<UrlResponse> => {
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
        const errorResponse: UrlResponse = {
            config: {
                url
            },
            data: '',
            headers: {},
            status,
            statusText
        };
        return await Promise.resolve(errorResponse);
    } else {
        console.error(error);
        throw error;
    }
};

/**
 * This function replaces the base URL of a given URL, if the TARGET_BASE_URL environment variable is set.
 *
 * @param url a given URL to be refactored
 * @returns a new URL if TARGET_BASE_URL is defined, else return the given URL
 */
const getNewUrl = (url: string): string => {
    if (TARGET_BASE_URL) {
        const baseUrl = SITEMAP_URL.substring(0, url.indexOf('/', 8));
        url = url.replace(baseUrl, TARGET_BASE_URL);
    }
    return url;
};

/**
 * This function is used to map a given array of URLs to an array of axios GET requests.
 *
 * @param urls a given array of URLs to map to an array of axios GET requests
 * @returns an array of axios GET requests
 */
const getUrlRequests = (urls: string[]): UrlRequest[] => {
    const requests = urls.reduce((requests: UrlRequest[], url: string): UrlRequest[] => {
        const request = axios.get<string>(getNewUrl(url)).catch(requestGetUrlErrorHandler);
        requests.push(request);
        return requests;
    }, []);
    return requests;
};

/**
 * This function is used to map a given array of axios GET requests to an array of axios responses.
 *
 * @param requests a given array of axios GET requests to map to an array of axios responses
 * @returns an array of axios responses
 */
const requestGetUrlResponses = async (requests: UrlRequest[]): Promise<UrlResponse[]> => {
    toggleAxiosErrors(false);
    const responses: UrlResponse[] = [];
    for (let i = 0; i < requests.length; i++) {
        const request = requests[i];
        const response = await request;
        responses.push(response);
    }
    toggleAxiosErrors(true);
    return responses;
};

/**
 * This function is used to print a URL status table to the console, from a given array of axios responses.
 *
 * @param responses a given array of axios responses.
 */
const printUrlStatusTable = (responses: UrlResponse[]): void => {
    const table = new Table({
        columns: [
            { name: 'status', alignment: 'center' },
            { name: 'statusText', alignment: 'left' },
            { name: 'url', alignment: 'left' }
        ]
    });
    const rows = responses.map((response: UrlResponse): IUrlStatusRow => {
        const url = response.config.url ?? response.request.responseURL as string;
        const { status, statusText } = response;
        const urlStatusRow = {
            data: {
                status,
                statusText,
                url
            },
            options: {
                color: status === 200 ? 'green' : 'red'
            }
        };
        return urlStatusRow;
    });
    for (const row of rows) {
        const { data, options } = row;
        table.addRow(data, options);
    }
    table.printTable();
};

/**
 * This function is used to make GET requests for a given array of URLs, and print the results.
 *
 * @param urls a given array of URLs to test
 */
export const requestTestUrls = async (urls: string[]): Promise<void> => {
    const requests = getUrlRequests(urls);
    const responses = await requestGetUrlResponses(requests);
    printUrlStatusTable(responses);
};
