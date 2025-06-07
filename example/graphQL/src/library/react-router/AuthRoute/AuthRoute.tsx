import {useAuthState} from '@acrool/react-fetcher';
import {Navigate, Outlet, useLocation} from 'react-router';


/**
 * 登入狀態保護Route
 */
const AuthRoute = () => {
    const {pathname} = useLocation();
    const {isAuth} = useAuthState();


    if(!isAuth){
        return <Navigate to="/sign/login" state={{from: pathname}} replace/>;
    }
    return <Outlet/>;
};

export default AuthRoute;
