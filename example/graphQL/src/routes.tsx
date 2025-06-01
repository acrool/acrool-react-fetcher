import {createBrowserRouter} from 'react-router';

import {AuthRoute, SignRoute} from '@/library/react-router';
import Dashboard from '@/views/Dashboard';
import Login from '@/views/Login';

const routes = createBrowserRouter([
    {
        path: '/sign',
        Component: SignRoute,
        children: [
            {path: 'login', Component: Login},
        ],
    },
    {
        path: '/',
        Component: AuthRoute,
        children: [
            {index: true, Component: Dashboard},
        ],
    },
]);


export default routes;
