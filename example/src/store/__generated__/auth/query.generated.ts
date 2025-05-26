import * as Types from '../types.generated';

import {IUseFetcherArgs} from '@/library/graphql/fetcher';
import { baseApi } from '@/library/redux/baseApi';
import {gql, useSubscription, SubscriptionHookOptions} from '@apollo/client';
export type IPutAuthRefreshTokenVariables = Types.Exact<{
  input: Types.IAuthRefreshTokenInput;
}>;


export type IPutAuthRefreshToken = { authRefreshToken: { tokenInfo: { accessToken: string, refreshToken: string } } };

export type IPutAuthLoginVariables = Types.Exact<{
  input: Types.IAuthLoginInput;
}>;


export type IPutAuthLogin = { authLogin: { name: string, tokenInfo: { accessToken: string, refreshToken: string } } };

export type IPutAuthLogoutVariables = Types.Exact<{ [key: string]: never; }>;


export type IPutAuthLogout = { authLogout: { message: string, updateCount: number } };

export type IPutAuthDirectGoogleVerifyVariables = Types.Exact<{ [key: string]: never; }>;


export type IPutAuthDirectGoogleVerify = { authDirectGoogleVerify: { url: string } };

export type IPutAuthLoginWithGoogleVariables = Types.Exact<{
  input: Types.IAuthLoginByGoogleInput;
}>;


export type IPutAuthLoginWithGoogle = { authLoginWithGoogle: { name: string, tokenInfo: { accessToken: string, refreshToken: string } } };

export type IPutAuthSignUpVariables = Types.Exact<{
  input: Types.IAuthSignUpInput;
}>;


export type IPutAuthSignUp = { authSignUp: { message: string, name: string, tokenInfo: { accessToken: string, refreshToken: string } } };

export type IPutAuthSendVerifyCodeVariables = Types.Exact<{
  input: Types.IAuthSendVerifyCodeInput;
}>;


export type IPutAuthSendVerifyCode = { authSendVerifyCode: { message: string, verifyCodeId: string } };

export type IPutAuthResetPasswordVariables = Types.Exact<{
  input: Types.IAuthResetPasswordInput;
}>;


export type IPutAuthResetPassword = { authResetPassword: { message: string } };


 const PutAuthRefreshTokenDocument = `
mutation PutAuthRefreshToken($input: AuthRefreshTokenInput!) {
  authRefreshToken(input: $input) {
    tokenInfo {
      accessToken
      refreshToken
    }
  }
}`;
 const PutAuthLoginDocument = `
mutation PutAuthLogin($input: AuthLoginInput!) {
  authLogin(input: $input) {
    name
    tokenInfo {
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
 const PutAuthDirectGoogleVerifyDocument = `
mutation PutAuthDirectGoogleVerify {
  authDirectGoogleVerify {
    url
  }
}`;
 const PutAuthLoginWithGoogleDocument = `
mutation PutAuthLoginWithGoogle($input: AuthLoginByGoogleInput!) {
  authLoginWithGoogle(input: $input) {
    name
    tokenInfo {
      accessToken
      refreshToken
    }
  }
}`;
 const PutAuthSignUpDocument = `
mutation PutAuthSignUp($input: AuthSignUpInput!) {
  authSignUp(input: $input) {
    message
    name
    tokenInfo {
      accessToken
      refreshToken
    }
  }
}`;
 const PutAuthSendVerifyCodeDocument = `
mutation PutAuthSendVerifyCode($input: AuthSendVerifyCodeInput!) {
  authSendVerifyCode(input: $input) {
    message
    verifyCodeId
  }
}`;
 const PutAuthResetPasswordDocument = `
mutation PutAuthResetPassword($input: AuthResetPasswordInput!) {
  authResetPassword(input: $input) {
    message
  }
}`;

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    PutAuthRefreshToken: build.mutation<IPutAuthRefreshToken, IUseFetcherArgs<IPutAuthRefreshTokenVariables>>({
      query: (args) => ({ document: PutAuthRefreshTokenDocument, args })
    }),
    PutAuthLogin: build.mutation<IPutAuthLogin, IUseFetcherArgs<IPutAuthLoginVariables>>({
      query: (args) => ({ document: PutAuthLoginDocument, args })
    }),
    PutAuthLogout: build.mutation<IPutAuthLogout, IUseFetcherArgs<IPutAuthLogoutVariables> | void>({
      query: (args) => ({ document: PutAuthLogoutDocument, args })
    }),
    PutAuthDirectGoogleVerify: build.mutation<IPutAuthDirectGoogleVerify, IUseFetcherArgs<IPutAuthDirectGoogleVerifyVariables> | void>({
      query: (args) => ({ document: PutAuthDirectGoogleVerifyDocument, args })
    }),
    PutAuthLoginWithGoogle: build.mutation<IPutAuthLoginWithGoogle, IUseFetcherArgs<IPutAuthLoginWithGoogleVariables>>({
      query: (args) => ({ document: PutAuthLoginWithGoogleDocument, args })
    }),
    PutAuthSignUp: build.mutation<IPutAuthSignUp, IUseFetcherArgs<IPutAuthSignUpVariables>>({
      query: (args) => ({ document: PutAuthSignUpDocument, args })
    }),
    PutAuthSendVerifyCode: build.mutation<IPutAuthSendVerifyCode, IUseFetcherArgs<IPutAuthSendVerifyCodeVariables>>({
      query: (args) => ({ document: PutAuthSendVerifyCodeDocument, args })
    }),
    PutAuthResetPassword: build.mutation<IPutAuthResetPassword, IUseFetcherArgs<IPutAuthResetPasswordVariables>>({
      query: (args) => ({ document: PutAuthResetPasswordDocument, args })
    }),
  }),
});

export default injectedRtkApi;
export const { usePutAuthRefreshTokenMutation, usePutAuthLoginMutation, usePutAuthLogoutMutation, usePutAuthDirectGoogleVerifyMutation, usePutAuthLoginWithGoogleMutation, usePutAuthSignUpMutation, usePutAuthSendVerifyCodeMutation, usePutAuthResetPasswordMutation } = injectedRtkApi;



