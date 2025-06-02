
import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        PutAuthLogout: {
            invalidatesTags: (result, error, arg) => [
            ]
        },
    }
});


export default enhancedApi;
