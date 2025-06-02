import {IUseRestFulFetcherArgs as IUseFetcherArgs} from '@acrool/react-fetcher';

import {baseApi as api} from '../../../library/redux/baseApi';



const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        getBookmarkById: build.query<GetBookmarkByIdApiResponse, IUseFetcherArgs<GetBookmarkByIdApiArg>>({
            query: (queryArg) => ({url: `/bookmark/${queryArg.id}`}),
        }),
    }),
    overrideExisting: false,
});
export default injectedRtkApi;


export type GetBookmarkByIdApiResponse =
/** status 200 successful operation */ BookmarkDetail;
export type GetBookmarkByIdApiArg = {
    /** ID */
    id: string,
};

export type BookmarkDetail = {
    /** ID */
    id: string,
    /** 名稱 */
    name: string,
    /** d說明 */
    desc: string,
    /** 網址 */
    url: string,
    /** 圖標網址 */
    faviconUrl: string,
};
export const {
    useGetBookmarkByIdQuery,
} = injectedRtkApi;
