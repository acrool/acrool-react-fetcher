
import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        // Dashboard
        PutAuthLogout: {
            invalidatesTags: (result, error, arg) => [
                // {type: 'Bookmark'},
            ]
        },
    }
});


export default enhancedApi;
