import {objectKeys} from '@acrool/js-utils/object';
import {createApi, defaultSerializeQueryArgs} from '@reduxjs/toolkit/query/react';

import {ECacheTagTypes} from '@/store/tagTypes';

import {baseQueryWithAxios} from './baseQueryWithAxios';




export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAxios,
    serializeQueryArgs: ({queryArgs, endpointDefinition, endpointName}) => {
        // 只使用 variables 作為緩存鍵
        const {variables} = (queryArgs || {}) as any;
        return defaultSerializeQueryArgs({
            endpointName,
            queryArgs: variables,
            endpointDefinition
        });
    },
    endpoints: () => ({}),
    tagTypes: objectKeys(ECacheTagTypes),

});
