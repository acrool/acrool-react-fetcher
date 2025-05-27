
import {TSelectorFunc} from '@/library/redux';

import {TPayload} from './model';
import {getAuthTokens, jwtDecode} from './utils';


/** -----------------------------------------
 |               Interface                  |
 /** ---------------------------------------*/
interface ISelector {
    permissions: TSelectorFunc<string[]>
    // payload: TSelectorFunc<TPayload>;
    isAuth: TSelectorFunc<boolean>
    payload: TSelectorFunc<TPayload|undefined>
}

/** -----------------------------------------
 |               Selectors                  |
 /** --------------------------------------*/
const selector: ISelector = {
    // accessToken: (state) => getAuthTokens()?.accessToken,
    // refreshToken: (state) => getAuthTokens()?.refreshToken,
    permissions: (state) => [],
    isAuth: (state) => {
        const accessToken = getAuthTokens()?.accessToken;
        return !!accessToken;

        // // 因Token刷新觸發, 登出機制, 為 Request之後, 所以不判斷過期時間
        // if(!state[name].authTokens?.isLoginDone){
        //     return false;
        // }
    },
    payload: (state) => {
        // 因Token刷新觸發, 登出機制, 為 Request之後, 所以不判斷過期時間
        const accessToken = getAuthTokens()?.accessToken;
        if(!accessToken){
            return undefined;
        }
        return jwtDecode(accessToken);
    },
};




export default selector;
