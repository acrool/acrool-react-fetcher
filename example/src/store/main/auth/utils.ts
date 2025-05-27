import {isNotEmpty} from '@acrool/js-utils/equal';
import {IAuthTokens} from '@acrool/react-fetcher';
import {jwtDecode as jwtDecodeLib} from 'jwt-decode';

import {TPayload} from '@/store/main/auth/model';


/**
 * JWTDecode 與 Decode Fail 預設回傳格式
 * @param token
 */
export function jwtDecode(token: string): TPayload{
    if(isNotEmpty(token)){
        try {
            return jwtDecodeLib(token);
        } catch (e) {
            return undefined;
        }
    }
    return undefined;
}



/**
 * 取得Token資訊
 */
export function getAuthTokens(): IAuthTokens|undefined{
    // @TODO: 開發者自行實作將 Token存儲在LocalStore或Cookie中
    return window.mockTokens;
}

/**
 * 設定Token資訊
 * @param authTokens
 */
export function setAuthTokens(authTokens: IAuthTokens): void{
    // @TODO: 開發者自行實作將 Token存儲在LocalStore或Cookie中
    window.mockTokens = authTokens;
}

/**
 * 移除Token資訊
 */
export function removeAuthTokens(): void{
    // @TODO: 開發者自行實作將 Token存儲在LocalStore或Cookie中
    window.mockTokens = undefined;
}
