import {IAuthTokens} from '@acrool/react-fetcher';
import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import {TReducers} from '@/library/redux';
import {removeAuthTokens, setAuthTokens} from '@/store/main/auth/utils';

import {ICheckIn} from './model';
import {IState,name, state} from './state';



/** -----------------------------------------
 |         Action Payload Interface         |
 /** ---------------------------------------*/
export interface IActionCreators {
    // // 系統登入
    // login: ICheckIn
    // refreshToken: {authTokens: IAuthTokens}
    // // 系統登出
    // logout: undefined
}


/** -----------------------------------------
 |                Reducer                   |
 /** ---------------------------------------*/
const reducers: TReducers<IActionCreators, IState> = {
    // /**
    //  * 登入系統
    //  */
    // login: (state, {payload}) => {
    //     setAuthTokens(payload.authTokens);
    // },
    //
    // /**
    //  * 更新 Token
    //  * @param state
    //  * @param payload
    //  */
    // refreshToken: (state, {payload}) => {
    //     setAuthTokens(payload.authTokens);
    // },
    //
    //
    // /**
    //  * 登出系統
    //  */
    // logout: (state, action) => {
    //     removeAuthTokens();
    //     return {...state, profile: undefined};
    // },
};


export const {reducer, actions} = createSlice({name, initialState: state, reducers});
