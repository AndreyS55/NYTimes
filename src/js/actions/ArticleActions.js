import NYTApi from '../api/Api';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesRequest = () => ({
    type: FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (articles, hits) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles, hits }
});

export const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});

const fetchArticles = (values, page) => {
    return dispatch => {
        dispatch(fetchArticlesRequest());
        return NYTApi(values, page)
            .then(json => {
                dispatch (fetchArticlesSuccess(json.response.docs, json.response.meta.hits));
                return [json.response.docs, json.response.meta.hits]
            })
            .catch(error => dispatch(fetchArticlesFailure(error)));
    }
};

export default fetchArticles;