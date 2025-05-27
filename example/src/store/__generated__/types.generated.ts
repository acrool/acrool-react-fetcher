import {ReadStream} from 'fs-capacitor';

export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };


interface GraphQLFileUpload {
    filename: string
    mimetype: string
    encoding: string
    createReadStream(options?:{encoding?: string, highWaterMark?: number}): ReadStream
}

export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: Promise<GraphQLFileUpload>
}

export enum ECountry {
  Aus = 'AUS',
  Chn = 'CHN',
  Hkg = 'HKG',
  Idn = 'IDN',
  Jpn = 'JPN',
  Kor = 'KOR',
  Mys = 'MYS',
  Phl = 'PHL',
  Sgp = 'SGP',
  Tha = 'THA',
  Twa = 'TWA',
  Usa = 'USA',
  Vnm = 'VNM',
}

export interface IAuthTokens {
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
}

export interface IAuthLoginInput {
  account: Scalars['String']
  password: Scalars['String']
}

export interface IAuthLogin {
  name: Scalars['String']
  authTokens: IAuthTokens
}

export interface IAuthRefreshTokenInput {
  refreshToken: Scalars['String']
}

export interface IAuthRefreshToken {
  authTokens: IAuthTokens
}

export interface IResultUpdateData {
  message: Scalars['String']
}

export interface IResultCreateData {
  message: Scalars['String']
  newId: Scalars['ID']
}

export interface IMember {
  id: Scalars['ID']
  name: Scalars['String']
}

export interface IWorkspace {
  id: Scalars['ID']
  name: Scalars['String']
}

export interface IBookmark {
  id: Scalars['ID']
  name: Scalars['String']
  desc?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  devUrl?: Maybe<Scalars['String']>
  evaluateUrl?: Maybe<Scalars['String']>
  country?: Maybe<ECountry>
  remark?: Maybe<Scalars['String']>
  faviconUrl?: Maybe<Scalars['String']>
  creator?: Maybe<IMember>
  workspace: IWorkspace
}

export interface IBookmarkCreateInput {
  name: Scalars['String']
  desc?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  devUrl?: InputMaybe<Scalars['String']>
  evaluateUrl?: InputMaybe<Scalars['String']>
  country?: InputMaybe<ECountry>
  remark?: InputMaybe<Scalars['String']>
  faviconUrl?: InputMaybe<Scalars['String']>
  workspaceId: Scalars['ID']
}

export interface IMutation {
  authLogin: (input: IAuthLoginInput) => IAuthLogin
  authLogout: () => IResultUpdateData
  authRefreshToken: (input: IAuthRefreshTokenInput) => IAuthRefreshToken
  bookmarkCreate: (input: IBookmarkCreateInput) => IResultCreateData
}
