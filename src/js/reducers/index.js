import { combineReducers } from 'redux';
import articles from './ArticleReducer';
import values from './FormReducer';

export default combineReducers({
    articles,
    values
});

