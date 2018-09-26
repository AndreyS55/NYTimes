import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import articles from './ArticleReducer';

export default combineReducers({
    routing: routerReducer,
    articles,
    form: formReducer
});

