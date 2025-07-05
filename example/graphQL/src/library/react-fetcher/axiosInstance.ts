import {createAxiosInstance} from '@acrool/react-fetcher';

import {baseURL} from './config';

export const axiosInstance = createAxiosInstance({
    baseURL: baseURL,
    headers: {
        'Cache-Control': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest',
        // Extend Headers...
    },
    timeout: 2 * 60 * 1000,
});
