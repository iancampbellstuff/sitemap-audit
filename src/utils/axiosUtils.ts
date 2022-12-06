import axios from 'axios';

/**
 * This function toggles request errors on or off, depending on the given boolean flag.
 *
 * @param enable the boolean flag used to toggle request errors on or off
 */
export const toggleRequestErrors = (enable?: boolean) => {
    axios.interceptors.request.use((config) => {
        // Do something before request is sent
        return config;
    }, async (error) => {
        return enable ? await Promise.reject(error) : await Promise.resolve(error);
    });
};

/**
 * This function toggles response errors on or off, depending on the given boolean flag.
 *
 * @param enable the boolean flag used to toggle response errors on or off
 */
export const toggleResponseErrors = (enable?: boolean) => {
    axios.interceptors.response.use((response) => {
        // Do something with response data
        return response;
    }, async (error) => {
        return enable ? await Promise.reject(error) : await Promise.resolve(error);
    });
};

/**
 * This function toggles axios errors on or off, depending on the given boolean flag.
 *
 * @param enable the boolean flag used to toggle axios errors on or off
 */
export const toggleAxiosErrors = (enable?: boolean) => {
    toggleRequestErrors(enable);
    toggleResponseErrors(enable);
};
