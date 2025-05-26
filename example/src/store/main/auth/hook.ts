import {block} from '@acrool/react-block';
import {IUseFetcherArgs} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import {memoize} from 'proxy-memoize';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {loginRoutePath} from '@/config/app';
import {refreshingHeaderKey} from '@/library/graphql/config';
import {useAppDispatch, useAppSelector} from '@/library/redux';
import {
    IPutAuthLoginVariables, IPutAuthLoginWithGoogleVariables, IPutAuthSignUpVariables,
    usePutAuthDirectGoogleVerifyMutation,
    usePutAuthLoginMutation,
    usePutAuthLoginWithGoogleMutation,
    usePutAuthLogoutMutation,
    usePutAuthRefreshTokenMutation, usePutAuthSignUpMutation
} from '@/store/__generated__';
import {authActions, authSelector} from '@/store/main/auth';
import {actions} from '@/store/main/auth/reducer';
import {getTokenInfo} from '@/store/main/auth/utils';

import {ICheckIn} from './model';



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

    return () => {
        AuthLogoutMutation({})
            .unwrap()
            .then(res => {
                dispatch(actions.logout());
                console.log(t('message.logout', {def: 'Thank you for your use, you have successfully logged out'}));
                navigate(loginRoutePath);
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
    const dispatch = useAppDispatch();


    const {t} = useLocale();

    return (args: ICheckIn) => {
        // 將緩存失效
        dispatch(authActions.login(args));

        // 成功後跳轉
        dispatch(authActions.setLoginDone());

        console.log(t('message.login', {args: {userName: args.name}}));
    };

}




/**
 * 刷新Token
 */
export function useRefreshToken() {
    const [RefreshTokenMutation] = usePutAuthRefreshTokenMutation();

    return async () => {
        const {refreshToken} = getTokenInfo();

        if(!refreshToken){
            console.error('refresh token is empty');
            return;
        }

        return RefreshTokenMutation({
            variables: {input: {refreshToken}},
            fetchOptions: {
                requestCode: 'refreshToken',
                headers: {
                    [refreshingHeaderKey]: 'true',
                }
            }
        }).unwrap();

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

/**
 * 跳轉到Google身份驗證
 * OAuth Login
 */
export function useDirectGoogleVerify() {
    const [AuthDirectGoogleVerifyMutation] = usePutAuthDirectGoogleVerifyMutation();

    return () => {
        block.show();
        AuthDirectGoogleVerifyMutation({})
            .unwrap()
            .then(res => {
                window.location.href = res.authDirectGoogleVerify.url;
            })
            .finally(() => {
                block.hide();
            });
    };

}


/**
 * Google 身份驗證成功後 返回代碼 讓我方驗證
 */
export function useLoginByGoogle() {
    const CheckIn = useCheckIn();
    const [AuthLoginWithGoogleMutation] = usePutAuthLoginWithGoogleMutation();

    return async (args: IUseFetcherArgs<IPutAuthLoginWithGoogleVariables>) => {
        return AuthLoginWithGoogleMutation(args)
            .unwrap()
            .then(res => {
                CheckIn(res.authLoginWithGoogle);
            });

    };
}



/**
 * 會員註冊
 */
export function useSignUp() {
    const CheckIn = useCheckIn();
    const [AuthSignUpMutation] = usePutAuthSignUpMutation();

    return async (args: IUseFetcherArgs<IPutAuthSignUpVariables>) => {
        return AuthSignUpMutation(args)
            .unwrap()
            .then(res => {
                CheckIn(res.authSignUp);
            });
    };
}



/**
 * 發送驗證碼
 */
// export function useSendVerifyCode() {
//     const dispatch = useAppDispatch();
//
//     return usePutAuthSendVerifyCodeMutation({
//         ...mutationBlockEvent,
//         onSuccess: res => {
//             dispatch(actions.sendVerifyCodeSuccess({verifyCodeId: res.authSendVerifyCode.verifyCodeId}));
//             dialog.success(res.authSendVerifyCode.message);
//         }
//     });
//
// }


