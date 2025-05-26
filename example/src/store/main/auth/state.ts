import {IMember} from '@/store/__generated__';



/** -----------------------------------------
 |   @@@@@@@@@@   Store Key   @@@@@@@@@@    |
 /** ---------------------------------------*/
export const name = 'auth';

/** -----------------------------------------
 |               Interface                   |
 /** ---------------------------------------*/
export interface IState {
    isSuccess: boolean // 等待需要的事情處理完成才跳轉的判斷

    profile?: IMember

    verifyCodeId: string
    workspaceId: string
    sendVerifyCodeLastTime: number
}

/** -----------------------------------------
 |            Initial State                 |
 /** ---------------------------------------*/
export const initialState = (): IState => ({
    isSuccess: false,

    profile: undefined,
    verifyCodeId: '',

    workspaceId: '',
    sendVerifyCodeLastTime: 0,
});



export const state = initialState();
