import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        // Bookmarks
        getBookmarkById: {
            providesTags: (result, error, arg) => [
                {type: 'Bookmark'}
            ]
        },
    }
});


export default enhancedApi;
