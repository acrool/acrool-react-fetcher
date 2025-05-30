import {AxiosRequestConfig} from 'axios';

export interface IFetchOptions {
    pendingRequest?: boolean
    requestCode?: string
    forceGuest?: boolean
    leastTime?: number // 最少需等待時間 (毫秒)
    timeout?: number // 逾時時間 (毫秒)
}

export interface IRequestConfig extends AxiosRequestConfig, IFetchOptions{
}
