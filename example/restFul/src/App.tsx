import './App.css';

import {RouterProvider} from 'react-router';

import AppBlockPortal from '@/library/acrool-react-block';
import AppDialogPortal from '@/library/acrool-react-dialog';
import AppToasterPortal from '@/library/acrool-react-toaster';
import routes from '@/routes';


function App() {
    return (<>
        <RouterProvider router={routes}/>
        <AppDialogPortal/>
        <AppBlockPortal/>
        <AppToasterPortal/>
    </>);
}

export default App;
