
import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        postAuthSignLogout: {
            invalidatesTags: (result, error, arg) => [
                // {type: 'Bookmark'}
            ]
        },
    }
});


export default enhancedApi;
