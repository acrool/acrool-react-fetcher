import {TGetResponseFormatError} from './types';



/**
 * 返回 Axios 格式錯誤 With GraphQL
 * 針對 GraphQL多錯誤格式
 * @param axiosError
 */
export const getGraphQLResponseFormatError: TGetResponseFormatError = (axiosError) => {
    const responseData = axiosError?.response?.data as {errors: Array<{code: string, message: string}>};
    if(responseData.errors?.[0]){
        return responseData.errors?.[0];
    }

    if(axiosError?.isAxiosError){
        return {
            message: axiosError.message,
            code: axiosError.code,
        };
    }

    return {
        message: 'Axios error',
        code: 'ERR_SYS_BAD_RESPONSE',
    };
};



/**
 * 返回 Axios 格式錯誤 with RestFul
 * @param axiosError
 */
export const getRestFulResponseFormatError: TGetResponseFormatError = (axiosError) => {
    const responseData = axiosError?.response?.data as {code: string, message: string};
    if(responseData){
        return responseData;
    }

    if(axiosError?.isAxiosError){
        return {
            message: axiosError.message,
            code: axiosError.code,
        };
    }

    return {
        message: 'Axios error',
        code: 'ERR_SYS_BAD_RESPONSE',
    };
};


