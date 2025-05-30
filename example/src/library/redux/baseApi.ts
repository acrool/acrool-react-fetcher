import {createGraphQLFetcher, IRequestConfig} from '@acrool/react-fetcher';
import {createApi, defaultSerializeQueryArgs} from '@reduxjs/toolkit/query/react';
import {Mutex} from 'async-mutex';

import {axiosInstance} from '@/library/acrool-react-fetcher';

const mutex = new Mutex();

interface IQuery {
    document: string
    args: {
        variables: any,
        fetchOptions?: IRequestConfig,
    }
}



export const baseQueryWithReAuthGraphql: any = async (
    query: IQuery,
    api: any,
    extraOptions: any,
) => {
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


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuthGraphql,
    serializeQueryArgs: ({queryArgs, endpointDefinition, endpointName}) => {
        const {variables} = (queryArgs || {}) as any;
        return defaultSerializeQueryArgs({
            endpointName,
            queryArgs: variables,
            endpointDefinition
        });
    },
    // baseQuery: fetchBaseQuery(),
    endpoints: () => ({}),
    tagTypes: [
        'Bookmark',
        'Bookmarks',
    ],
});
