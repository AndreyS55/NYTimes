import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container'
import './App.scss';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/:filter?' component={Container}/>
        </Router>
    </Provider>
);

export default App;