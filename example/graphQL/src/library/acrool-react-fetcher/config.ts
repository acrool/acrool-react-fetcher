import {createAxiosInstance} from '@acrool/react-fetcher';

export const axiosInstance = createAxiosInstance({
    baseURL: '/graphql',
});


export const persistAuthKey = 'persist:acrool-auth';
export const refreshingHeaderKey = 'X-Requested-Refresh-Token';
