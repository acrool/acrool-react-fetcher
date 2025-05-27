import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        // Bookmarks
        GetBookmark: {
            providesTags: (result, error, arg) => [{type: 'Bookmark'}]
        },
        PutBookmarkCreate: {
            invalidatesTags: (result, error, arg) => [{type: 'Bookmarks'}]
        },
    }
});


export default enhancedApi;
