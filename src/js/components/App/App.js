import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container'
import './App.scss';

const store = configureStore();
const App = () => (
    <Provider store={store}>
        <Router>
            <Route path='/:filter?' component={Container}/>
        </Router>
    </Provider>
);

export default App;