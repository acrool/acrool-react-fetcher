
import {TSelectorFunc} from '@/library/redux';

import {TPayload} from './model';
import {getTokenInfo, jwtDecode} from './utils';


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
    // accessToken: (state) => getTokenInfo()?.accessToken,
    // refreshToken: (state) => getTokenInfo()?.refreshToken,
    workspaceId: (state) => state.auth.workspaceId,
    permissions: (state) => [],
    isAuth: (state) => {
        const accessToken = getTokenInfo()?.accessToken;
        return !!accessToken;

        // // 因Token刷新觸發, 登出機制, 為 Request之後, 所以不判斷過期時間
        // if(!state[name].tokenInfo?.isLoginDone){
        //     return false;
        // }
    },
    personalWorkspaceId: (state) => {
        const accessToken = getTokenInfo()?.accessToken;
        if(!accessToken){
            return undefined;
        }
        return jwtDecode(accessToken)?.personalWorkspaceId;
    },
    payload: (state) => {
        // 因Token刷新觸發, 登出機制, 為 Request之後, 所以不判斷過期時間
        const accessToken = getTokenInfo()?.accessToken;
        if(!accessToken){
            return undefined;
        }
        return jwtDecode(accessToken);
    },
};




export default selector;
