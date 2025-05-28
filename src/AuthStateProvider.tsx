import logger from '@acrool/js-logger';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import React, {createContext, ReactNode, RefObject, useCallback, useContext, useRef, useState} from 'react';

import {SystemException} from './exception';
import {IAuthTokens} from './types';

// 定義 payload 與 token 的型別
export interface AuthPayload {
    userId: string
    username: string

    // 你可以根據實際需求擴充欄位
    [key: string]: any
}

// 新增 updateTokens 的型別
export type TAuthTokensUpdater = (tokensOrUpdater: IAuthTokens | null | ((curr: IAuthTokens | null) => IAuthTokens | null)) => void;


type TOnRefreshToken = (refreshToken: string) => Promise<IAuthTokens|undefined>;
type THandleOnRefreshToken = () => Promise<void>;
type TOnForceLogout = () => void;

interface AuthState {
    lastUpdateTimestamp: number
    tokensRef: RefObject<IAuthTokens|null>|null
    updateTokens: TAuthTokensUpdater
    onRefreshToken: THandleOnRefreshToken
    onForceLogout: TOnForceLogout
    isAuth: boolean
    // clearTokens: () => void
}

const AuthStateContext = createContext<AuthState>({
    lastUpdateTimestamp: 0,
    tokensRef: null,
    isAuth: false,
    updateTokens: () => logger.warning('AuthStateContext','updateTokens not yet ready'),
    onForceLogout: () => logger.warning('AuthStateContext','onForceLogout not yet ready'),
    onRefreshToken: async () => {
        logger.warning('AuthStateContext','onRefreshToken not yet ready');
        return undefined;
    },
});

export const useAuthState = () => useContext(AuthStateContext);

interface AuthStateProviderProps {
    children: ReactNode
    onRefreshToken: TOnRefreshToken
    onForceLogout: TOnForceLogout
}

const AuthStateProvider = ({
    children,
    onRefreshToken,
    onForceLogout
}: AuthStateProviderProps) => {
    const tokensRef = useRef<IAuthTokens>(null);
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    /**
     * 更新 tokens
     * @param tokensOrUpdater 新的認證 Token 或 (curr) => 新的 Token
     */
    const updateTokens: TAuthTokensUpdater = (tokensOrUpdater) => {
        let nextTokens: IAuthTokens | null;
        if (typeof tokensOrUpdater === 'function') {
            nextTokens = (tokensOrUpdater as (curr: IAuthTokens | null) => IAuthTokens | null)(tokensRef.current);
        } else {
            nextTokens = tokensOrUpdater;
        }
        logger.danger('更新Token', nextTokens);
        tokensRef.current = nextTokens;
        setIsAuth(isNotEmpty(nextTokens));
        setLastUpdateTimestamp(Date.now());
    };


    /**
     * 強制登出
     */
    const handleOnForceLogout = () => {
        updateTokens(null);
        onForceLogout();
    };

    /**
     * 當刷新 tokens 時世紀ㄢ
     */
    const handleOnRefreshToken = async () => {
        const refreshToken = tokensRef.current?.refreshToken;
        if(!refreshToken) return;

        try {
            const authTokens = await onRefreshToken(refreshToken);
            if(isEmpty(authTokens)){
                throw new SystemException({message: 'refresh token fail'});
            }
            updateTokens(authTokens);

            return;

        } catch (err){
            handleOnForceLogout();
        }




        //
        // .then(authTokens => {
        //     // 假設外部 refreshToken 已經自動更新 token 狀態
        //     if(isEmpty(authTokens)){
        //         throw new SystemException({
        //             message: 'Refresh Token Fail',
        //             code: 'SERVICE_HTTP_401',
        //         });
        //     }
        //     updateTokens(authTokens);
        //     runPendingRequest(true);
        // })
        // .catch(() => {
        //     // handleOnForceLogout();
        //     runPendingRequest(false);
        // });

    };



    return (
        <AuthStateContext.Provider value={{
            lastUpdateTimestamp,
            tokensRef,
            isAuth,
            updateTokens,
            onRefreshToken: handleOnRefreshToken,
            onForceLogout: handleOnForceLogout
        }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
