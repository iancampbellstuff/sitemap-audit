import axios from 'axios';
import { DOMParser } from 'xmldom';
import { getEnvironmentVariables } from './envUtils';

const { SITEMAP_URL, URL_COUNT_THRESHOLD } = getEnvironmentVariables();
const XML_FILE_EXTENSION = '.xml';
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
let allSitemapUrls: string[] = [];

/**
 * This function requests an array of sitemap URLs from a given sitemap URL.
 *
 * @param sitemapUrl a given sitemap URL
 * @returns an array of sitemap URLs
 */
const requestGetSitemapUrls = async (sitemapUrl: string): Promise<string[]> => {
    if (!sitemapUrl.endsWith(XML_FILE_EXTENSION)) {
        return [sitemapUrl];
    }
    const response = await axios.get<string>(sitemapUrl);
    const sitemap = parser.parseFromString(response.data, 'text/xml');
    if (!sitemap.hasChildNodes() || sitemap.getElementsByTagName('loc').length === 0) {
        return [];
    }
    const elements = [
        // Sitemap index file
        ...Array.from(sitemap.getElementsByTagName('sitemap')),
        // Sitemap file
        ...Array.from(sitemap.getElementsByTagName('url'))
    ];
    const sitemapUrls = elements.reduce((urls: string[], element: Element): string[] => {
        // Both sitemap index and sitemap files
        const loc = element.getElementsByTagName('loc')[0];
        const url = loc.textContent?.trim();
        if (url !== undefined) {
            urls.push(url);
            // Sitemap file
            const linkElements = Array.from(element.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link'));
            for (const linkElement of linkElements) {
                const href = linkElement.getAttribute('href')?.trim();
                if (href !== undefined && !urls.includes(href)) {
                    urls.push(href);
                }
            }
        }
        return urls;
    }, []);
    return sitemapUrls;
};

/**
 * This function recursively requests an array of all sitemap URLs from a given sitemap URL.
 *
 * @param sitemapUrl a given sitemap URL
 * @returns an array of all sitemap URLs
 */
export const requestGetAllSitemapUrls = async (sitemapUrl: string = SITEMAP_URL): Promise<string[]> => {
    const sitemapUrls = await requestGetSitemapUrls(sitemapUrl);
    for (const url of sitemapUrls) {
        if (allSitemapUrls.length >= URL_COUNT_THRESHOLD) {
            break;
        } else if (url.endsWith(XML_FILE_EXTENSION)) {
            const recursiveSitemapUrls = await requestGetAllSitemapUrls(url);
            allSitemapUrls.concat(recursiveSitemapUrls);
        } else if (!allSitemapUrls.includes(url)) {
            allSitemapUrls.push(url);
        }
    }
    return allSitemapUrls.sort();
};

/**
 * This function resets the internal sitemap URL array.
 * Call this function after each request to get all sitemap URLs.
 */
export const reset = (): void => {
    allSitemapUrls = [];
};
