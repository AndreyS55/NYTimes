import NYTApi from '../api/Api';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({
    type: FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles }
});

export const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});

const fetchArticles = (url) => {
    return dispatch => {
        dispatch(fetchArticlesRequest());
        return NYTApi(url)
            .then(json => {
                dispatch (fetchArticlesSuccess(json.response.docs));
                return json.response.docs;
            })
            .catch(error => dispatch(fetchArticlesFailure(error)));
    }
};

export default fetchArticles;