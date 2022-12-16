const nock = require('nock');

jest.mock('./src/utils/envUtils', () => ({
    getEnvironmentVariables: () => ({
        SITEMAP_URL: 'https://www.google.com/sitemap.xml',
        URL_COUNT_THRESHOLD: 100
    })
}));

beforeAll(() => {
    nock.disableNetConnect();
});
