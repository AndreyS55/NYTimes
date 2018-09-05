import NYTApi from '../api/Api';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({
    type: FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = () => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles }
});

export const fetchArticlesFailure = () => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});

const fetchArticles = () => {
    return dispatch => {
        dispatch(fetchArticlesRequest());
        return NYTApi()
            .then(json => {
                dispatch (fetchArticlesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchArticlesFailure(error)));
    }
};

export default fetchArticles;