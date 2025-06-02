
import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        postAuthSignLogout: {
            invalidatesTags: (result, error, arg) => [
            ]
        },
    }
});


export default enhancedApi;
