import {useAuthState} from '@acrool/react-fetcher';
import {Navigate, Outlet} from 'react-router';


/**
 * 註冊登入頁 判斷跳轉路由
 */
const SignRoute = () => {
    const {isAuth} = useAuthState();

    if(isAuth){
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
};

export default SignRoute;
