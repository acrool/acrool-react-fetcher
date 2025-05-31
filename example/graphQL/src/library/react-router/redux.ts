import {createBrowserHistory, To} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';

import {routePrefixPath} from '@/config/app';

const originalHistory = createBrowserHistory();

/**
 * 新增路由前綴路徑
 * @param to
 * @param state
 */
const addPrefixPath = (to: To, state?: any) => {
    if(typeof to === 'string'){
        originalHistory.push([routePrefixPath, to].join(''), state);
    }else{
        const newTo = {
            ...to,
            pathnameBase: [routePrefixPath, to.pathname].join(''),
        };
        originalHistory.push(newTo, state);
    }
};

const history = {
    ...originalHistory,
    push: addPrefixPath,
    replace: addPrefixPath,
};

export const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({
    history: history
});

