import {useAuthState} from '@acrool/react-fetcher';
import {useLocale} from '@acrool/react-locale';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch} from '@/library/redux';
import {
    bookmarkApi,
    usePutAuthLogoutMutation,
} from '@/store/__generated__';


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


