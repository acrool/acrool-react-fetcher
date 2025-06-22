import {createRestFulFetcher, IRequestConfig} from '@acrool/react-fetcher';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';

import {axiosInstance} from './config';

const mutex = new Mutex();


interface IQuery {
    url: string
    method?: string
    body?: Record<string, any>
    params?: Record<string, any>
    fetchOptions?: IRequestConfig
}



export const baseQueryWithAxios: BaseQueryFn<IQuery> = async (query, BaseQueryApi, extraOptions) => {
    await mutex.waitForUnlock();
    try {
        const {url, method, ...args} = query;

        const data = await createRestFulFetcher(axiosInstance, {url, method})(args);

        return {
            data,
            meta: {}
        };

    } catch (error: unknown) {
        return {
            error,
        };
    }
};
