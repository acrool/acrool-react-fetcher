import {configureStore} from '@reduxjs/toolkit';

import {baseApi} from '@/library/redux/baseApi';
import appReducer, {TAppState} from '@/store/appReducer';
import appState from '@/store/appState';

import {syncStoreMiddleware} from './syncStoreMiddleware';
import {ITypedSelector} from './types';



/**
 * v20220704
 * @param preloadedState
 */
export default function configureAppStore(preloadedState: any = {}) {
    const isDev = process.env.NODE_ENV !== 'production';

    const middlewares = [syncStoreMiddleware];
    const enhancers = undefined;



    // 處理 Preload State (最多兩層)
    const cacheObj: any = {};
    for (const [key, value] of Object.entries(appState)) {
        if(typeof preloadedState[key] !== 'undefined'){
            cacheObj[key] = Object.assign({}, value, preloadedState[key]);
        }
    }


    const store = configureStore({
        reducer: appReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({serializableCheck: false})
                .concat(...middlewares)
                .concat(baseApi.middleware),
        preloadedState: cacheObj,
        enhancers,
        devTools: isDev,
    });

    // init api middleware
    const reduxSelector: ITypedSelector<TAppState> = (selector) => selector(store.getState());
    const reduxDispatch = store.dispatch;

    if (isDev && import.meta.hot) {
        import.meta.hot.accept('@/store/appReducer', () => store.replaceReducer(appReducer));
    }

    return {
        store,
        reduxSelector,
        reduxDispatch
    };
}


