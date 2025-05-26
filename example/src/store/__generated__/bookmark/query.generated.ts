import * as Types from '../types.generated';

import {IUseFetcherArgs} from '@/library/graphql/fetcher';
import { PaginateMeta, PaginateInfo, MemberShort, ResultIconSvg } from '../_fragments/fragment.generated';
import { baseApi } from '@/library/redux/baseApi';
import {gql, useSubscription, SubscriptionHookOptions} from '@apollo/client';
export type IGetBookmarkVariables = Types.Exact<{
  bookmarkId: Types.Scalars['ID'];
}>;


export type IGetBookmark = { bookmark?: { id: string, name: string, desc?: string | undefined, url?: string | undefined, devUrl?: string | undefined, evaluateUrl?: string | undefined, country?: Types.ECountry | undefined, remark?: string | undefined, faviconUrl?: string | undefined } | undefined };

export type IGetBookmarksWithPaginationVariables = Types.Exact<{
  workspaceId: Types.Scalars['ID'];
  paginate: Types.IPaginateInput;
  search?: Types.InputMaybe<Types.IBookmarksWithPaginationSearchInput>;
}>;


export type IGetBookmarksWithPagination = { bookmarksWithPagination: { meta: { currentPage: number, pageLimit: number, order?: { orderField: string, orderBy: string } | undefined }, info: { totalItems: number, totalPages: number }, rows: Array<{ id: string, name: string, desc?: string | undefined, url?: string | undefined, devUrl?: string | undefined, evaluateUrl?: string | undefined, country?: Types.ECountry | undefined, remark?: string | undefined, createdAt: string, updatedAt?: string | undefined, faviconUrl?: string | undefined, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined }> } };

export type IPutBookmarkCreateVariables = Types.Exact<{
  workspaceId: Types.Scalars['ID'];
  input: Types.IBookmarkCreateInput;
  favicon?: Types.InputMaybe<Types.Scalars['Upload']>;
}>;


export type IPutBookmarkCreate = { bookmarkCreate: { message: string, newId: string } };

export type IPutBookmarkUpdateVariables = Types.Exact<{
  bookmarkId: Types.Scalars['ID'];
  input: Types.IBookmarkUpdateInput;
  favicon?: Types.InputMaybe<Types.Scalars['Upload']>;
}>;


export type IPutBookmarkUpdate = { bookmarkUpdate: { message: string, updateCount: number } };

export type IPutBookmarkDeleteVariables = Types.Exact<{
  bookmarkId: Types.Scalars['ID'];
}>;


export type IPutBookmarkDelete = { bookmarkDelete: { deleteCount: number, message: string } };

export type IPutBookmarkDeleteAvatarVariables = Types.Exact<{
  bookmarkId: Types.Scalars['ID'];
}>;


export type IPutBookmarkDeleteAvatar = { bookmarkDeleteAvatar: { message: string, deleteCount: number } };


 const GetBookmarkDocument = `
query GetBookmark($bookmarkId: ID!) {
  bookmark(bookmarkId: $bookmarkId) {
    id
    name
    desc
    url
    devUrl
    evaluateUrl
    country
    remark
    faviconUrl
  }
}`;
 const GetBookmarksWithPaginationDocument = `
query GetBookmarksWithPagination($workspaceId: ID!, $paginate: PaginateInput!, $search: BookmarksWithPaginationSearchInput) {
  bookmarksWithPagination(
    workspaceId: $workspaceId
    paginate: $paginate
    search: $search
  ) {
    meta {
      ...PaginateMeta
    }
    info {
      ...PaginateInfo
    }
    rows {
      id
      name
      desc
      url
      devUrl
      evaluateUrl
      country
      remark
      createdAt
      updatedAt
      creator {
        ...MemberShort
      }
      faviconUrl
    }
  }
}
${PaginateMeta}${PaginateInfo}${MemberShort}`;
 const PutBookmarkCreateDocument = `
mutation PutBookmarkCreate($workspaceId: ID!, $input: BookmarkCreateInput!, $favicon: Upload) {
  bookmarkCreate(workspaceId: $workspaceId, input: $input, favicon: $favicon) {
    message
    newId
  }
}`;
 const PutBookmarkUpdateDocument = `
mutation PutBookmarkUpdate($bookmarkId: ID!, $input: BookmarkUpdateInput!, $favicon: Upload) {
  bookmarkUpdate(bookmarkId: $bookmarkId, input: $input, favicon: $favicon) {
    message
    updateCount
  }
}`;
 const PutBookmarkDeleteDocument = `
mutation PutBookmarkDelete($bookmarkId: ID!) {
  bookmarkDelete(bookmarkId: $bookmarkId) {
    deleteCount
    message
  }
}`;
 const PutBookmarkDeleteAvatarDocument = `
mutation PutBookmarkDeleteAvatar($bookmarkId: ID!) {
  bookmarkDeleteAvatar(bookmarkId: $bookmarkId) {
    message
    deleteCount
  }
}`;

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetBookmark: build.query<IGetBookmark, IUseFetcherArgs<IGetBookmarkVariables>>({
      query: (args) => ({ document: GetBookmarkDocument, args })
    }),
    GetBookmarksWithPagination: build.query<IGetBookmarksWithPagination, IUseFetcherArgs<IGetBookmarksWithPaginationVariables>>({
      query: (args) => ({ document: GetBookmarksWithPaginationDocument, args })
    }),
    PutBookmarkCreate: build.mutation<IPutBookmarkCreate, IUseFetcherArgs<IPutBookmarkCreateVariables>>({
      query: (args) => ({ document: PutBookmarkCreateDocument, args })
    }),
    PutBookmarkUpdate: build.mutation<IPutBookmarkUpdate, IUseFetcherArgs<IPutBookmarkUpdateVariables>>({
      query: (args) => ({ document: PutBookmarkUpdateDocument, args })
    }),
    PutBookmarkDelete: build.mutation<IPutBookmarkDelete, IUseFetcherArgs<IPutBookmarkDeleteVariables>>({
      query: (args) => ({ document: PutBookmarkDeleteDocument, args })
    }),
    PutBookmarkDeleteAvatar: build.mutation<IPutBookmarkDeleteAvatar, IUseFetcherArgs<IPutBookmarkDeleteAvatarVariables>>({
      query: (args) => ({ document: PutBookmarkDeleteAvatarDocument, args })
    }),
  }),
});

export default injectedRtkApi;
export const { useGetBookmarkQuery, useLazyGetBookmarkQuery, useGetBookmarksWithPaginationQuery, useLazyGetBookmarksWithPaginationQuery, usePutBookmarkCreateMutation, usePutBookmarkUpdateMutation, usePutBookmarkDeleteMutation, usePutBookmarkDeleteAvatarMutation } = injectedRtkApi;



