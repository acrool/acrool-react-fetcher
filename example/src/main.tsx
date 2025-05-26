import '@acrool/react-grid/dist/index.css';
import './index.css';

import {GridThemeProvider} from '@acrool/react-grid';
import composedProviders, {providerWithProps} from '@acrool/react-providers';
import {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import {HistoryRouter as Router} from 'redux-first-history/rr6';

import ReactFetcherProvider from '@/library/acrool-react-fetcher';
import ReactLocaleProvider from '@/library/acrool-react-locale';
import {Provider as ReduxProvider} from '@/library/redux';

import App from './App';
import {appTheme, gridConfig, history, store} from './setup';

const routePrefixPath = '';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    createElement(composedProviders(
        [
            providerWithProps(ReduxProvider, {store}),
            // providerWithProps(ApolloProvider, {client: apolloClient}),
            providerWithProps(ReactLocaleProvider, {}),
            providerWithProps(Router, {history: history, basename: routePrefixPath}),
            providerWithProps(ReactFetcherProvider, {}),
            providerWithProps(GridThemeProvider, {gridTheme: gridConfig}),
        ]
    )(App))
);


