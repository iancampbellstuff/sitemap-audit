import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    debug: true,
    path: path.join(__dirname, '/../../.env')
});

export interface IEnvironmentVariables {
    URL_COUNT_THRESHOLD: number;
    SITEMAP_URL: string;
    TARGET_BASE_URL?: string;
}

/**
 * This function validates a given environment variables object.
 *
 * @param environmentVariables the environment variables object to be validated
 * @throws an error if one or more required environment variable(s) was not defined
 */
const validateEnvironmentVariables = (environmentVariables: IEnvironmentVariables) => {
    const {
        SITEMAP_URL,
        URL_COUNT_THRESHOLD
    } = environmentVariables;
    if (!SITEMAP_URL || !Number.isInteger(URL_COUNT_THRESHOLD)) {
        throw new EvalError('One or more required environment variable(s) was not defined!');
    }
};

/**
 * This function creates an environment variables object from process.env, then validates and returns the object.
 *
 * @returns an environment variables object
 */
export const getEnvironmentVariables = (): IEnvironmentVariables => {
    const {
        SITEMAP_URL,
        TARGET_BASE_URL,
        URL_COUNT_THRESHOLD
    } = process.env;
    const environmentVariables = {
        SITEMAP_URL: SITEMAP_URL as string,
        TARGET_BASE_URL: TARGET_BASE_URL as string,
        URL_COUNT_THRESHOLD: parseInt(URL_COUNT_THRESHOLD as string, 10)
    };
    validateEnvironmentVariables(environmentVariables);
    return environmentVariables;
};
