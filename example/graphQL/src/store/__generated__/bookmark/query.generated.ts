
import {IUseGraphQLFetcherArgs as IUseFetcherArgs} from '@acrool/react-fetcher';

import {baseApi} from '@/library/redux/baseApi';

import * as Types from '../types.generated';
export type IGetBookmarkVariables = Types.Exact<{
  bookmarkId: Types.Scalars['ID'],
}>;


export type IGetBookmark = { bookmark?: { id: string, name: string, desc?: string | undefined, url?: string | undefined, devUrl?: string | undefined, evaluateUrl?: string | undefined, country?: Types.ECountry | undefined, remark?: string | undefined, faviconUrl?: string | undefined } | undefined };

export type IPutBookmarkCreateVariables = Types.Exact<{
  workspaceId: Types.Scalars['ID'],
  input: Types.IBookmarkCreateInput,
  favicon?: Types.InputMaybe<Types.Scalars['Upload']>,
}>;


export type IPutBookmarkCreate = { bookmarkCreate: { message: string, newId: string } };


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
const PutBookmarkCreateDocument = `
mutation PutBookmarkCreate($workspaceId: ID!, $input: BookmarkCreateInput!, $favicon: Upload) {
  bookmarkCreate(workspaceId: $workspaceId, input: $input, favicon: $favicon) {
    message
    newId
  }
}`;

const injectedRtkApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        GetBookmark: build.query<IGetBookmark, IUseFetcherArgs<IGetBookmarkVariables>>({
            query: (args) => ({document: GetBookmarkDocument, args})
        }),
        PutBookmarkCreate: build.mutation<IPutBookmarkCreate, IUseFetcherArgs<IPutBookmarkCreateVariables>>({
            query: (args) => ({document: PutBookmarkCreateDocument, args})
        }),
    }),
});

export default injectedRtkApi;
export const {useGetBookmarkQuery, useLazyGetBookmarkQuery, usePutBookmarkCreateMutation} = injectedRtkApi;



