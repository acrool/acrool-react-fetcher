import {AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';

interface IFetchOptions {
    pendingRequest?: boolean
    requestCode?: string
    forceGuest?: boolean
    leastTime?: number // 最少需等待時間 (毫秒)
    timeout?: number // 逾時時間 (毫秒)
    ignoreGlobalError?: boolean // 忽略通例錯誤回調
}

export interface IInternalRequestConfig extends InternalAxiosRequestConfig, IFetchOptions{
    /**
     * 這次請求送出時帶的 accessToken（FetcherProvider 的請求攔截器記錄，沒帶 token 時是 undefined）。
     * 收到 401 時用來判斷失效的是不是目前的 token
     */
    requestAccessToken?: string
}

export interface IRequestConfig extends AxiosRequestConfig, IFetchOptions{
}
