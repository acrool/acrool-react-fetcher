import {IUseRestFulFetcherArgs as IUseFetcherArgs} from '@acrool/react-fetcher';

import {baseApi as api} from '../../../library/redux/baseApi';



const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        getBookmarkById: build.query<GetBookmarkByIdApiResponse, IUseFetcherArgs<GetBookmarkByIdApiArg>>({
            query: (queryArg) => ({
                url: `/bookmark/${queryArg.variables.id}`,
                variables: queryArg.variables,
                fetchOptions: queryArg?.fetchOptions,
            }),
        }),
        getAudit: build.query<GetBookmarkLinksApiResponse, IUseFetcherArgs<GetBookmarkLinksApiArg>>({
            query: (queryArg) => ({
                url: `/bookmark/${queryArg.variables.id}/links`,
                params: {
                    currentPage: queryArg.variables.currentPage,
                    pageLimit: queryArg.variables.pageLimit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});
export default injectedRtkApi;


export type GetBookmarkByIdApiResponse =
/** status 200 successful operation */ BookmarkDetail;


export type GetBookmarkLinksApiResponse = /** status 200 successful operation */ {
    rows: BookmarkLinkListRow[],
    paginateInfo: PaginateInfo,
    paginateMeta: PaginateMeta,
};


export type GetBookmarkLinksApiArg = {
    /** 第幾頁 */
    currentPage: number,
    /** 一頁幾筆 */
    pageLimit: number,
    /** ID */
    id: string,
};

export type PaginateInfo = {
    /** 總筆數 */
    totalItems: number,
    /** 總頁數 */
    totalPages: number,
};
export type PaginateMeta = {
    /** 目前頁面 */
    currentPage: number,
    /** 一次顯示幾筆 */
    pageLimit: number,
};

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

export type BookmarkLinkListRow = {
    /** ID */
    id: string,
    /** 名稱 */
    name: string,
    /** 網址 */
    url: string,
};

export const {
    useGetBookmarkByIdQuery,
} = injectedRtkApi;
