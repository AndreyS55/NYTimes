import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {composeWithDevTools} from "redux-devtools-extension";

export default (initialState = null) =>
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );