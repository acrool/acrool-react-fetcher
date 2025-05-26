import {HashOutlet} from '@acrool/react-router-hash';
import {Navigate, useLocation} from 'react-router-dom';

import {useAppSelector} from '@/library/redux';
import {authSelector} from '@/store/main/auth';


/**
 * 登入狀態保護HashRoute
 */
const AuthHashRoute = () => {
    const {pathname} = useLocation();
    const isAuthSuccess = useAppSelector(authSelector.isAuth);

    if(!isAuthSuccess){
        return <Navigate to="/sign/login" state={{from: pathname}} replace/>;
    }

    return <HashOutlet/>;
};

export default AuthHashRoute;
