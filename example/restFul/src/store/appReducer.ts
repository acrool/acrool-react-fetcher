import {combineReducers} from '@reduxjs/toolkit';

import {baseApi} from '@/library/redux/baseApi';


const appReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
});

export default appReducer;
export type TAppState = ReturnType<typeof appReducer>;



