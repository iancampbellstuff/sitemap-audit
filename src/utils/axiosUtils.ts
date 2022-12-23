import axios from 'axios';

enum AxiosInterceptorType {
    REQUEST,
    RESPONSE
}

/**
 * This function toggles errors on or off depending on the given boolean flag, for a given axios interceptor type.
 *
 * @param enable the boolean flag used to toggle request errors on or off
 * @param axiosInterceptorType the axios interceptor type to toggle errors for, defaulting to requests
 */
const toggleErrors = (enable?: boolean, axiosInterceptorType: AxiosInterceptorType = AxiosInterceptorType.REQUEST) => {
    const onFulfilledHandler = (config) => {
        // Do something before request is sent
        return config;
    };
    const onRejectedHandler = async (error) => {
        return enable ? await Promise.reject(error) : await Promise.resolve(error);
    };
    const axiosInterceptorManager = axiosInterceptorType === AxiosInterceptorType.RESPONSE
        ? axios.interceptors.response
        : axios.interceptors.request;
    axiosInterceptorManager.use(onFulfilledHandler, onRejectedHandler);
};

/**
 * This function toggles request errors on or off, depending on the given boolean flag.
 *
 * @param enable the boolean flag used to toggle request errors on or off
 */
export const toggleRequestErrors = (enable?: boolean) => {
    toggleErrors(enable, AxiosInterceptorType.REQUEST);
};

/**
 * This function toggles response errors on or off, depending on the given boolean flag.
 *
 * @param enable the boolean flag used to toggle response errors on or off
 */
export const toggleResponseErrors = (enable?: boolean) => {
    toggleErrors(enable, AxiosInterceptorType.RESPONSE);
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
