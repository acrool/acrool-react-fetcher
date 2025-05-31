import {combineReducers} from '@reduxjs/toolkit';

import {routerReducer as router} from '@/library/react-router/redux';
import {baseApi} from '@/library/redux/baseApi';


const appReducer = combineReducers({
    // Main
    router,

    [baseApi.reducerPath]: baseApi.reducer
});

export default appReducer;
export type TAppState = ReturnType<typeof appReducer>;



