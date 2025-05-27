import {IUseFetcherArgs} from '@acrool/react-fetcher';

import {baseApi} from '@/library/redux/baseApi';

import * as Types from '../types.generated';
export type IPutAuthRefreshTokenVariables = Types.Exact<{
  input: Types.IAuthRefreshTokenInput,
}>;


export type IPutAuthRefreshToken = { authRefreshToken: { authTokens: { accessToken: string, refreshToken: string } } };

export type IPutAuthLoginVariables = Types.Exact<{
  input: Types.IAuthLoginInput,
}>;


export type IPutAuthLogin = { authLogin: { name: string, authTokens: { accessToken: string, refreshToken: string } } };

export type IPutAuthLogoutVariables = Types.Exact<{ [key: string]: never }>;


export type IPutAuthLogout = { authLogout: { message: string, updateCount: number } };


const PutAuthRefreshTokenDocument = `
mutation PutAuthRefreshToken($input: AuthRefreshTokenInput!) {
  authRefreshToken(input: $input) {
    authTokens {
      accessToken
      refreshToken
    }
  }
}`;
const PutAuthLoginDocument = `
mutation PutAuthLogin($input: AuthLoginInput!) {
  authLogin(input: $input) {
    name
    authTokens {
      accessToken
      refreshToken
    }
  }
}`;
const PutAuthLogoutDocument = `
mutation PutAuthLogout {
  authLogout {
    message
    updateCount
  }
}`;

const injectedRtkApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        PutAuthRefreshToken: build.mutation<IPutAuthRefreshToken, IUseFetcherArgs<IPutAuthRefreshTokenVariables>>({
            query: (args) => ({document: PutAuthRefreshTokenDocument, args})
        }),
        PutAuthLogin: build.mutation<IPutAuthLogin, IUseFetcherArgs<IPutAuthLoginVariables>>({
            query: (args) => ({document: PutAuthLoginDocument, args})
        }),
        PutAuthLogout: build.mutation<IPutAuthLogout, IUseFetcherArgs<IPutAuthLogoutVariables> | void>({
            query: (args) => ({document: PutAuthLogoutDocument, args})
        }),
    }),
});

export default injectedRtkApi;
export const {usePutAuthRefreshTokenMutation, usePutAuthLoginMutation, usePutAuthLogoutMutation,} = injectedRtkApi;



