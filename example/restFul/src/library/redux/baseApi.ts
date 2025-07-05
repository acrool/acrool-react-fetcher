import {objectKeys} from '@acrool/js-utils/object';
import {createApi} from '@reduxjs/toolkit/query/react';

import {ECacheTagTypes} from '@/store/tagTypes';

import {baseQueryWithAxios} from './baseQueryWithAxios';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAxios,
    endpoints: () => ({}),
    tagTypes: objectKeys(ECacheTagTypes),
});
