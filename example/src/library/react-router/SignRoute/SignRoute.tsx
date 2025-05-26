import {Navigate, Outlet} from 'react-router-dom';

import {useAppSelector} from '@/library/redux';
import {authSelector} from '@/store/main/auth';


/**
 * 註冊登入頁 判斷跳轉路由
 */
const SignRoute = () => {
    const isAuth = useAppSelector(authSelector.isAuth);
    if(isAuth){
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
};

export default SignRoute;
