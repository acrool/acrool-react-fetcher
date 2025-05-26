import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        // Bookmarks
        GetBookmark: {
            providesTags: (result, error, arg) => [{type: 'Bookmark'}]
        },
        GetBookmarksWithPagination: {
            providesTags: (result, error, arg) => [{type: 'Bookmarks'}],
        },
        PutBookmarkCreate: {
            invalidatesTags: (result, error, arg) => [{type: 'Bookmarks'}]
        },
        PutBookmarkUpdate: {
            invalidatesTags: (result, error, arg) => [
                {type: 'Bookmark'},
                {type: 'Bookmarks'},
            ]
        },
        PutBookmarkDelete: {
            invalidatesTags: (result, error, arg) => [{type: 'Bookmarks'}]
        },
    }
});


export default enhancedApi;
