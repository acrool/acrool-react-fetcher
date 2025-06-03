import '@acrool/react-grid/dist/index.css';
import '@acrool/react-dialog/dist/index.css';
import '@acrool/react-block/dist/index.css';
import '@acrool/react-toaster/dist/index.css';
import './index.css';

import {GridThemeProvider} from '@acrool/react-grid';
import composedProviders, {providerWithProps} from '@acrool/react-providers';
import {createElement} from 'react';
import ReactDOM from 'react-dom/client';

import AppFetcherProvider, {AppAuthStateProvider} from '@/library/acrool-react-fetcher';
import ReactLocaleProvider from '@/library/acrool-react-locale';
import {Provider as ReduxProvider} from '@/library/redux';

import App from './App';
import {gridConfig, store} from './setup';


function renderApp() {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        createElement(composedProviders(
            [
                providerWithProps(ReduxProvider, {store}),
                // providerWithProps(ApolloProvider, {client: apolloClient}),
                providerWithProps(ReactLocaleProvider, {}),
                providerWithProps(AppAuthStateProvider, {}),
                providerWithProps(AppFetcherProvider, {}),
                providerWithProps(GridThemeProvider, {gridTheme: gridConfig}),
            ]
        )(App))
    );
}

if (import.meta.env.DEV) {
    import('./mocks/browser').then(({worker}) => {
        worker.start({
            quiet: false,
            // onUnhandledRequest: 'error',
        }).then(() => {
            console.log('MSW worker started');
            renderApp();
        });
    });
} else {
    renderApp();
}


