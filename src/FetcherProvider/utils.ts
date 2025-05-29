import {AxiosResponse} from 'axios';

import {IResponseFirstError} from './types';



/**
 * 返回 Axios 格式錯誤
 * @param response
 */
export const getResponseFirstError = (response?: AxiosResponse): IResponseFirstError => {
    if(response?.data?.errors[0]){
        return response?.data?.errors[0];
    }
    return {
        message: 'Axios error',
        code: 'ERR_SYS_BAD_RESPONSE',
    };
};


