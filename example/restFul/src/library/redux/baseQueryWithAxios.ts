import {createRestFulFetcher, ERequestContentType, IRequestConfig, TContentTypeResolver} from '@acrool/react-fetcher';
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
 * 根據 method 取得 Content-Type
 * @param method
 */
export const getContentTypeWithMethod: TContentTypeResolver = (method) => {
    // if ([ERequestMethod.POST, ERequestMethod.PUT].includes(method)) return ERequestContentType.formData;
    // if ([ERequestMethod.DELETE].includes(method)) return ERequestContentType.formUrlDecode;
    return ERequestContentType.json;
};


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
        },
        {
            // contentTypeResolver: getContentTypeWithMethod, // 根據 contentType, 如果這個參數設定了，則不會使用 document.contentType
            fetcherLeastTime: 400,
        },
        )(args);

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
