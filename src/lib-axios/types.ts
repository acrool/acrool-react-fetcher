import {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export type TInterceptorRequest = (value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
export type TInterceptorResponse = (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>;

export interface AxiosClientDependencies {
  getTokenInfo: () => { accessToken?: string, refreshToken?: string }
  refreshToken: () => Promise<{ tokenInfo: any } | null>
  onForceLogout: () => void
  getLocale: () => string
  t?: (key: string, options?: any) => string
  onError?: (error: { code: string, response: any, originalConfig: any }) => void
}
