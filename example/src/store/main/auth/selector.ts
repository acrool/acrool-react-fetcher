
import {TSelectorFunc} from '@/library/redux';

import {TPayload} from './model';
import {getAuthTokens, jwtDecode} from './utils';


/** -----------------------------------------
 |               Interface                  |
 /** ---------------------------------------*/
interface ISelector {
    // profile: TSelectorFunc<IMember|undefined>
    workspaceId: TSelectorFunc<string>
    permissions: TSelectorFunc<string[]>
    // payload: TSelectorFunc<TPayload>;
    isAuth: TSelectorFunc<boolean>
    personalWorkspaceId: TSelectorFunc<string|undefined>
    payload: TSelectorFunc<TPayload|undefined>
}

/** -----------------------------------------
 |               Selectors                  |
 /** --------------------------------------*/
const selector: ISelector = {
    // profile: (state) => state[name].profile,
    // accessToken: (state) => getAuthTokens()?.accessToken,
    // refreshToken: (state) => getAuthTokens()?.refreshToken,
    workspaceId: (state) => state.auth.workspaceId,
    permissions: (state) => [],
    isAuth: (state) => {
        const accessToken = getAuthTokens()?.accessToken;
        return !!accessToken;

        // // 因Token刷新觸發, 登出機制, 為 Request之後, 所以不判斷過期時間
        // if(!state[name].authTokens?.isLoginDone){
        //     return false;
        // }
    },
    personalWorkspaceId: (state) => {
        const accessToken = getAuthTokens()?.accessToken;
        if(!accessToken){
            return undefined;
        }
        return jwtDecode(accessToken)?.personalWorkspaceId;
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
