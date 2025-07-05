import {createGraphQLFetcher, IUseGraphQLFetcherArgs} from '@acrool/react-fetcher';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';

import {axiosInstance} from '@/library/react-fetcher/axiosInstance';

const mutex = new Mutex();

interface IQuery {
    document: string
    args: IUseGraphQLFetcherArgs
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
        return {
            error,
        };
    }
};
