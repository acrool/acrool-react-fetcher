import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';


import NotFound from './views/NotFound';
import Dashboard from './views/Dashboard';

import './App.css';
import Banner from './components/Banner';
import {createBrowserHistory} from 'history';
import {GridThemeProvider} from '@acrool/react-grid';


const history = createBrowserHistory({window});


const MainRouter = () => {
    return  <Routes>
        <Route path="/" element={<Dashboard/>} />

        {/* NotFound */}
        <Route path="*" element={<NotFound/>}/>
    </Routes>;
};


function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>

                <MainRouter/>
            </div>
        </GridThemeProvider>
    );
}

export default App;
