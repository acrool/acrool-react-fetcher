import {IRestFulEndpointsQueryReturn as IUseFetcherArgs} from '@acrool/react-fetcher';

import {baseApi as api} from '../../../library/redux/baseApi';



const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        postAuthSignLogin: build.mutation<
            PostAuthSignLoginApiResponse,
            IUseFetcherArgs<PostAuthSignLoginApiArg>
        >({
            query: (queryArg) => ({
                url: '/auth/sign/login',
                method: 'POST',
                body: queryArg.variables.body,
                fetchOptions: queryArg?.fetchOptions,
            }),
        }),
        postAuthSignRefresh: build.mutation<
            PostAuthSignRefreshApiResponse,
            IUseFetcherArgs<PostAuthSignRefreshApiArg>
        >({
            query: (queryArg) => ({
                url: '/auth/sign/refresh',
                method: 'POST',
                body: queryArg.variables.body,
                fetchOptions: queryArg?.fetchOptions,
            }),
        }),
        postAuthSignLogout: build.mutation<
            PostAuthSignLogoutApiResponse,
            IUseFetcherArgs<PostAuthSignLogoutApiArg>
        >({
            query: (queryArg) => ({
                url: '/auth/sign/logout',
                method: 'POST',
                fetchOptions: queryArg?.fetchOptions,
            }),
        }),
    }),
    overrideExisting: false,
});
export default injectedRtkApi;

export type PostAuthSignLoginApiResponse = /** status 200  */ {
    authTokens: {
        accessToken: string,
        refreshToken: string,
    },
    /** 訊息 */
    message: string,
};
export type PostAuthSignLoginApiArg = {
    body: {
        /** 帳號 */
        account?: string,
        /** 密碼 */
        password?: string,
    },
};
export type PostAuthSignRefreshApiResponse = /** status 200  */ {
    authTokens: {
        accessToken: string,
        refreshToken: string,
    },
};
export type PostAuthSignRefreshApiArg = {
    body: {
        /** 更新用Token */
        refreshToken: string,
    },
};
export type PostAuthSignLogoutApiResponse = /** status 200  */ {
    /** 訊息 */
    message: string,
};
export type PostAuthSignLogoutApiArg = void;

export const {
    usePostAuthSignLoginMutation,
    usePostAuthSignRefreshMutation,
    usePostAuthSignLogoutMutation,
} = injectedRtkApi;
