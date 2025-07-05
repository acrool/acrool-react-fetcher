import {createAxiosInstance} from '@acrool/react-fetcher';

import {baseURL} from './config';

export const axiosInstance = createAxiosInstance({
    baseURL,
    headers: {
        'Cache-Control': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest',
    // "Client-Id": "5000EA53752D4FEA95FA812345",
    // Extend Headers...
    },
    timeout: 1200 * 1000,
});
