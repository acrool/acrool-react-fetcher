import './App.css';

import {createBrowserHistory} from 'history';
import {Route, Routes} from 'react-router-dom';

import {AuthRoute, SignRoute} from '@/library/react-router';

import Banner from './components/Banner';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/NotFound';


const history = createBrowserHistory({window});


const MainRouter = () => {
    return  <Routes>


        <Route path="sign" element={<SignRoute/>}>
            <Route path="login" element={<Login/>} />
        </Route>

        <Route element={<AuthRoute/>}>
            <Route path="/" element={<Dashboard/>} />
        </Route>


        {/* NotFound */}
        <Route path="*" element={<NotFound/>}/>
    </Routes>;
};


function App() {
    return (
        <div className="App">
            <Banner/>

            <MainRouter/>
        </div>
    );
}

export default App;
