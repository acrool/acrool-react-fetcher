import {isNotEmpty} from '@acrool/js-utils/equal';
import {jsonDecode} from '@acrool/js-utils/string';
import {jwtDecode as jwtDecodeLib} from 'jwt-decode';

import {persistKey} from '@/config/app';
import {TPayload} from '@/store/main/auth/model';

interface ITokenInfo {
    accessToken?: string
    refreshToken?: string
}

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


export function getTokenInfo(): ITokenInfo{
    const persisData = window.localStorage.getItem(`${persistKey}-auth`);
    const tokenInfo = persisData ? jsonDecode<ITokenInfo>(persisData): undefined;

    return {
        accessToken: tokenInfo?.accessToken,
        refreshToken: tokenInfo?.refreshToken,
    };
}

export function setTokenInfo(tokenInfo: ITokenInfo): void{
    window.localStorage.setItem(`${persistKey}-auth`, JSON.stringify(tokenInfo));
}

export function removeTokenInfo(): void{
    window.localStorage.removeItem(`${persistKey}-auth`);
}
