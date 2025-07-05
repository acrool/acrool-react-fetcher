import {createRestFulFetcher, IRequestConfig} from '@acrool/react-fetcher';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';

import {axiosInstance} from '@/library/react-fetcher/axiosInstance';
const mutex = new Mutex();

export interface IQuery {
  url: string
  method?: string
  contentType?: string
  variables?: Record<string, unknown>
  fetchOptions?: IRequestConfig
}

/**
 * RTK Query 接入 Axios Fetcher 中間層
 * @param query
 */
export const baseQueryWithAxios: BaseQueryFn<IQuery> = async (
    query,
    // BaseQueryApi,
    // extraOptions,
) => {
    await mutex.waitForUnlock();
    try {
        const {url, method, contentType, ...args} = query;

        const data = await createRestFulFetcher(axiosInstance, {
            url,
            method,
            contentType,
        })(args);

        return {
            data,
            meta: {},
        };
    } catch (error: unknown) {
        return {
            error,
        };
    }
};
