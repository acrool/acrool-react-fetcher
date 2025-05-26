import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import {TReducers} from '@/library/redux';
import {removeTokenInfo, setTokenInfo} from '@/store/main/auth/utils';

import {ICheckIn, IToken} from './model';
import {IState,name, state} from './state';



/** -----------------------------------------
 |         Action Payload Interface         |
 /** ---------------------------------------*/
export interface IActionCreators {
    // 系統登入
    // login: {account: string, password: string};
    // loginBegin: undefined;
    login: ICheckIn
    // loginFail: {message: string};
    setLoginDone: undefined

    refreshToken: {tokenInfo: IToken}

    // 系統登出
    logout: undefined

    changeWorkspace: { workspaceId: string}

    // 發送驗證碼,記錄時間
    sendVerifyCodeSuccess: { verifyCodeId: string }
}


/** -----------------------------------------
 |                Reducer                   |
 /** ---------------------------------------*/
const reducers: TReducers<IActionCreators, IState> = {
    /**
     * 登入系統
     */
    login: (state, {payload}) => {
        setTokenInfo(payload.tokenInfo);
    },
    /**
     *
     */
    /**
     * 登入成功 (跳轉判斷用, 如果需要卡在登入畫面 處理完才跳轉)
     */
    setLoginDone: (state, {payload}) => {
        state.isSuccess = true;
    },
    /**
     * 更新 Token
     * @param state
     * @param payload
     */
    refreshToken: (state, {payload}) => {
        setTokenInfo(payload.tokenInfo);
    },


    /**
     * 登出系統
     */
    logout: (state, action) => {
        removeTokenInfo();
        return {...state, profile: undefined};
    },



    /**
     * 發送驗證Email驗證碼信
     */
    changeWorkspace: (state, {payload}) => {
        return {...state, workspaceId: payload.workspaceId};
    },


    /**
     * 發送驗證Email驗證碼信
     */
    sendVerifyCodeSuccess: (state, {payload}) => {
        return {...state, isSubmitting: false, verifyCodeId: payload.verifyCodeId, sendVerifyCodeLastTime: dayjs().unix()};
    },


};


export const {reducer, actions} = createSlice({name, initialState: state, reducers});
