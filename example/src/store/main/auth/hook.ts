import {IUseFetcherArgs} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import {memoize} from 'proxy-memoize';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {loginRoutePath} from '@/config/app';
import {refreshingHeaderKey} from '@/library/graphql/config';
import {useAppDispatch, useAppSelector} from '@/library/redux';
import {
    IPutAuthLoginVariables,
    usePutAuthLoginMutation,
    usePutAuthLogoutMutation,
    usePutAuthRefreshTokenMutation,
    bookmarkApi,
} from '@/store/__generated__';
import {authActions, authSelector} from '@/store/main/auth';
import {actions} from '@/store/main/auth/reducer';
import {getAuthTokens, setAuthTokens} from '@/store/main/auth/utils';

import {ICheckIn} from './model';
import {useAuthState} from '@acrool/react-fetcher';


export const selectPayload = memoize(authSelector.payload);

/**
 * 取得個人資料
 */
export function useMePayload() {
    const payload = useAppSelector(selectPayload);

    const checkIsMe = useCallback((memberId?: string|null) => {
        return payload?.id === memberId;
    }, [payload?.id]);

    return {
        checkIsMe,
        payload,
    };
}



/**
 * 會員登出
 */
export function useLogout() {
    const dispatch = useAppDispatch();
    const {t} = useLocale();
    const navigate = useNavigate();
    const [AuthLogoutMutation] = usePutAuthLogoutMutation();
    const {updateTokens} = useAuthState();

    return () => {
        AuthLogoutMutation({})
            .unwrap()
            .then(res => {
                updateTokens(null);
                // dispatch(actions.logout());
                // navigate(loginRoutePath);
                setTimeout(() => {
                    dispatch(bookmarkApi.util.invalidateTags(
                        [
                            {type: 'Bookmark'}
                        ]
                    ));
                }, 10);

                console.log('ssd');



                console.log(t('message.logout', {def: 'Thank you for your use, you have successfully logged out'}));
            });

    };
}


/**
 * 會員登出 (軟登出)
 */
export function useLogoutWithSoft() {
    const dispatch = useAppDispatch();
    const {t} = useLocale();
    const navigate = useNavigate();

    return () => {
        dispatch(actions.logout());
        navigate(loginRoutePath);
        console.log(t('message.logout', {def: 'Thank you for your use, you have successfully logged out'}));
    };

}


/**
 * 無權限踢出
 */
export function useKickOut() {
    const dispatch = useAppDispatch();
    const {t} = useLocale();
    const navigate = useNavigate();

    return () => {
        dispatch(actions.logout());
        console.error(
            t('message.kickOut',{def: 'Login status is invalid, please log in again'}),
            {code: 'KICK_OUT'},
        );
        navigate(loginRoutePath);
    };

}



/**
 * 報到 (登入 註冊 到後櫃檯報到)
 */
function useCheckIn() {
    // const dispatch = useAppDispatch();
    const {updateTokens} = useAuthState();


    const {t} = useLocale();

    return (args: ICheckIn) => {
        // 將緩存失效
        // dispatch(authActions.login(args));
        updateTokens(args.authTokens);

        console.log(t('message.login', {args: {userName: args.name}}));
    };

}




/**
 * 刷新Token
 */
export function useRefreshToken() {
    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    return async () => {
        const authTokens = getAuthTokens();

        if(!authTokens?.refreshToken){
            console.error('refresh token is empty');
            return undefined;
        }

        return RefreshTokenMutation({
            variables: {input: {refreshToken: authTokens.refreshToken}},
            fetchOptions: {
                requestCode: 'refreshToken',
                // headers: {
                //     [refreshingHeaderKey]: 'true',
                // }
            }
        }).unwrap();

        // return result.authRefreshToken.authTokens;
    };

}


/**
 * 會員登入
 */
export function useLogin() {
    const CheckIn = useCheckIn();
    const [AuthLoginMutation] = usePutAuthLoginMutation();

    return async (args: IUseFetcherArgs<IPutAuthLoginVariables>) => {
        return AuthLoginMutation(args)
            .unwrap()
            .then(res => {
                CheckIn(res.authLogin);
            });

    };


}
