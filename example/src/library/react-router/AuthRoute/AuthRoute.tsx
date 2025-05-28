import {Navigate, Outlet, useLocation} from 'react-router-dom';

import {useAppSelector} from '@/library/redux';
import {authSelector} from '@/store/main/auth';
import {useAuthState} from "@/library/acrool-react-fetcher/AuthStateProvider";


interface IProps {
    isSignRoute?: boolean
}

/**
 * 登入狀態保護Route
 */
const AuthRoute = ({
    isSignRoute = false
}: IProps) => {
    const {pathname} = useLocation();
    // const isAuthSuccess = useAppSelector(authSelector.isAuth);
    const {isAuth} = useAuthState();

    if(isSignRoute){
        // in sign route, if isAuth then redirect to home route
        if(isAuth){
            return <Navigate to="/" state={{from: pathname}} replace/>;
        }
    }else if(!isAuth){
        return <Navigate to="/sign/login" state={{from: pathname}} replace/>;
    }

    return <Outlet/>;
};

export default AuthRoute;
