import { getEnvironmentVariables, IEnvironmentVariables, MAX_JAVASCRIPT_ARRAY_LENGTH } from '../envUtils';

describe('envUtils', () => {
    describe('getEnvironmentVariables', () => {
        const evalError = new EvalError('One or more required environment variable(s) was not defined!');
        const rangeError = new RangeError('The given URL count threshold is out of range!');
        const PROCESS_ENV = process.env;
        beforeEach(() => {
            process.env = {
                ...PROCESS_ENV,
                URL_COUNT_THRESHOLD: undefined,
                SITEMAP_URL: undefined,
                TARGET_BASE_URL: undefined
            };
        });
        afterEach(() => {
            jest.resetModules();
            process.env = PROCESS_ENV;
        });
        it('should get required environment variables', () => {
            const environmentVariables: IEnvironmentVariables = {
                SITEMAP_URL: 'https://www.google.com/sitemap.xml',
                TARGET_BASE_URL: 'https://www.google-dev-environment.com',
                URL_COUNT_THRESHOLD: 100
            };
            const { SITEMAP_URL, TARGET_BASE_URL, URL_COUNT_THRESHOLD } = environmentVariables;
            process.env.SITEMAP_URL = SITEMAP_URL;
            process.env.TARGET_BASE_URL = TARGET_BASE_URL;
            process.env.URL_COUNT_THRESHOLD = URL_COUNT_THRESHOLD.toString();
            const result = getEnvironmentVariables();
            expect(result).toEqual(environmentVariables);
        });
        it('should get both required and optional environment variables', () => {
            const environmentVariables: IEnvironmentVariables = {
                SITEMAP_URL: 'https://www.google.com/sitemap.xml',
                URL_COUNT_THRESHOLD: 100
            };
            const { SITEMAP_URL, URL_COUNT_THRESHOLD } = environmentVariables;
            process.env.SITEMAP_URL = SITEMAP_URL;
            process.env.URL_COUNT_THRESHOLD = URL_COUNT_THRESHOLD.toString();
            const result = getEnvironmentVariables();
            expect(result).toEqual(environmentVariables);
        });
        it('should throw an error if the SITEMAP_URL environment variable is undefined', () => {
            process.env.URL_COUNT_THRESHOLD = '100';
            expect(() => getEnvironmentVariables()).toThrow(evalError);
        });
        it('should throw an error if the URL_COUNT_THRESHOLD environment variable is undefined', () => {
            process.env.SITEMAP_URL = 'https://www.google.com/sitemap.xml';
            expect(() => getEnvironmentVariables()).toThrow(evalError);
        });
        it('should throw an error if the URL_COUNT_THRESHOLD environment variable is not a number', () => {
            process.env.SITEMAP_URL = 'https://www.google.com/sitemap.xml';
            process.env.URL_COUNT_THRESHOLD = 'asdf';
            expect(() => getEnvironmentVariables()).toThrow(evalError);
        });
        it('should throw an error if the URL_COUNT_THRESHOLD environment variable is out of range', () => {
            process.env.SITEMAP_URL = 'https://www.google.com/sitemap.xml';
            process.env.URL_COUNT_THRESHOLD = '-1';
            expect(() => getEnvironmentVariables()).toThrow(rangeError);
            process.env.URL_COUNT_THRESHOLD = '0';
            expect(() => getEnvironmentVariables()).toThrow(rangeError);
            process.env.URL_COUNT_THRESHOLD = `${MAX_JAVASCRIPT_ARRAY_LENGTH + 1}`;
            expect(() => getEnvironmentVariables()).toThrow(rangeError);
        });
    });
});
