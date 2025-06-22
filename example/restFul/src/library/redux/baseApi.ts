import {createApi} from '@reduxjs/toolkit/query/react';

import {baseQueryWithAxios} from '@/library/acrool-react-fetcher/baseQueryWithAxios';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAxios,
    endpoints: () => ({}),
    tagTypes: [
        'Bookmark'
    ],
});






