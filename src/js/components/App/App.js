import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container'
// import SearchForm from '../SearchForm/SearchForm';
// import ArticleList from '../ArticleList/ArticleList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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