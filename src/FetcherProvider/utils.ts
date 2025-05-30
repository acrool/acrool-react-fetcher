import {TGetResponseFormatError} from './types';



/**
 * 返回 Axios 格式錯誤 With GraphQL
 * 針對 GraphQL多錯誤格式
 * @param response
 */
export const getGraphQLResponseFormatError: TGetResponseFormatError = (response) => {
    if(response?.data?.errors?.[0]){
        return response?.data?.errors?.[0];
    }
    return {
        message: 'Axios error',
        code: 'ERR_SYS_BAD_RESPONSE',
    };
};



/**
 * 返回 Axios 格式錯誤 with RestFul
 * @param response
 */
export const getRestFulResponseFormatError: TGetResponseFormatError = (response) => {
    if(response?.data){
        return response?.data;
    }
    return {
        message: 'Axios error',
        code: 'ERR_SYS_BAD_RESPONSE',
    };
};


