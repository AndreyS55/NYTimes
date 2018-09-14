import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from "../actions/ArticleActions";

const initialState = {
    items: [],
    hits: null,
    loading: false,
    error: null
};

const articles = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.articles,
                hits: action.payload.hits
            };

        case FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
};

export default articles;