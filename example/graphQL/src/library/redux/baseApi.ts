import {createGraphQLFetcher, IRequestConfig} from '@acrool/react-fetcher';
import {createApi, defaultSerializeQueryArgs} from '@reduxjs/toolkit/query/react';
import {Mutex} from 'async-mutex';

import {baseQueryWithAxios} from '@/library/acrool-react-fetcher/baseQueryWithAxios';

const mutex = new Mutex();

interface IQuery {
    document: string
    args: {
        variables: any,
        fetchOptions?: IRequestConfig,
    }
}




export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAxios,
    serializeQueryArgs: ({queryArgs, endpointDefinition, endpointName}) => {
        const {variables} = (queryArgs || {}) as any;
        return defaultSerializeQueryArgs({
            endpointName,
            queryArgs: variables,
            endpointDefinition
        });
    },
    endpoints: () => ({}),
    tagTypes: [
        'Bookmark',
        'Bookmarks',
    ],
});
