import {Middleware} from 'redux';

import {persistKeyMap, persistWhileList} from '@/config/app';
import {getByPath, setWith} from '@/utils/setWith';


const persistKey = persistKeyMap.root;

/**
 * 同步Store白名單到 Localstorage
 * @param store
 */
export const syncStoreMiddleware: Middleware = store => next => action => {
    // 更新狀態
    let isNeedUpdate = false;

    // 目前 LocalStorage State Object
    let storage = JSON.parse(window.localStorage.getItem(persistKey) || '{}');

    // 下一個結果
    const result = next(action);

    // 目前 Redux State Object
    const reduxState = store.getState();

    // 檢查白名單內的項目
    for(let i=0; i < persistWhileList.length; i++){
        const statePath = persistWhileList[i];

        const selectState = getByPath(reduxState, statePath);
        const selectPreloadState = getByPath(storage, statePath);

        if (JSON.stringify(selectState) !== JSON.stringify(selectPreloadState)) {
            isNeedUpdate = true;
            storage = setWith(storage, statePath, selectState);
        }
    }

    // 將新的更新同步到Cookie
    if (isNeedUpdate) {
        window.localStorage.setItem(persistKey, JSON.stringify(storage));
    }


    return result;
};
