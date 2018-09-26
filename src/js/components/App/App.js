import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container'
import './App.scss';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={Container}/>
        </ConnectedRouter>
    </Provider>
);

export default App;