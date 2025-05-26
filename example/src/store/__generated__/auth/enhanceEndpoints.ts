import {defaultSerializeQueryArgs} from '@reduxjs/toolkit/query/react';

import api from './query.generated';

const enhancedApi = api.enhanceEndpoints({
    endpoints: {
        // Dashboard
        PutAuthLogout: {
            invalidatesTags: (result, error, arg) => [
                {type: 'Tasks'},
            ]
        },
    }
});


export default enhancedApi;
