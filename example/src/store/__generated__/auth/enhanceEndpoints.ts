
import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        PutAuthLogout: {
            invalidatesTags: (result, error, arg) => [
                // {type: 'Bookmark'}
            ]
        },
    }
});


export default enhancedApi;
