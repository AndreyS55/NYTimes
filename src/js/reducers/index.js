import { combineReducers } from 'redux';
import articles from './ArticleReducer';
import values from './FormReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    articles,
    values
});

