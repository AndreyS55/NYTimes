import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../configs/configureStore';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import './App.scss';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div className={'App'}>
            <div className={'wrapper'}>
                <div className={'Container'}>
                    <SearchForm />
                    <ArticleList />
                </div>
            </div>
        </div>
    </Provider>
);

export default App;