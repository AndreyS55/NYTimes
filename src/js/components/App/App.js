import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container'
import Footer from '../Footer/Footer';
import styles from './App.scss';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
    <div className={styles.App}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path="/" component={Container} />
            </ConnectedRouter>
        </Provider>
        <Footer />
    </div>
);

export default App;