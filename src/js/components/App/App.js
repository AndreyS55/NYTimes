import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../configs/configureStore';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <div>
            <SearchForm />
            <hr/>
            <ArticleList />
        </div>
    </Provider>
);

export default App;