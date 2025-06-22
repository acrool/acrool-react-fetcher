import {dialog} from '@acrool/react-dialog';
import {createGraphQLFetcher, ERequestContentType, ERequestMethod, IRequestConfig, TContentTypeResolver} from '@acrool/react-fetcher';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';

import {axiosInstance} from '@/library/acrool-react-fetcher/config';

const mutex = new Mutex();


interface IQuery {
    document: string
    args: {
        variables: any,
        fetchOptions?: IRequestConfig,
    }
}




export const baseQueryWithAxios: BaseQueryFn<IQuery> = async (query, BaseQueryApi, extraOptions) => {
    await mutex.waitForUnlock();
    try {
        const data = await createGraphQLFetcher(axiosInstance, query.document)(query.args);
        return {
            data: data,
            meta: {},
        };

    } catch (error: any) {
        console.error(error.message, {code: error.code, path: error.path});

        return {
            error: {
                code: error.code || 500,
                message: error.message
            },
        };
    }
};
