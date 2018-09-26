import 'whatwg-fetch';

const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = '7b6416b1ffa44b7eba40cca2453a6e21';
const urlConverter = (values= {}, page = 1) => {
    let query = values.searchText ? '&q=' + values.searchText.split(' ').join('+') : '';
    let startDate = values.startDate ? '&begin_date=' + values.startDate.split('-').join('') : '';
    let endDate = values.endDate ? '&end_date=' + values.endDate.split('-').join('') : '';
    let pageCorresponds = '&page=' + (page-1);
    return `${API_URL}?api-key=${API_KEY}${query}${startDate}${endDate}${pageCorresponds}`;
};

const historyConverter = (values= {}, page = 1) => {
    let query = values.searchText ? '&query=' + values.searchText.split(' ').join('+') : '';
    let startDate = values.startDate ? '&begin_date=' + values.startDate.split('-').join('') : '';
    let endDate = values.endDate ? '&end_date=' + values.endDate.split('-').join('') : '';
    let pageCorresponds = '&page=' + page;
    return `/?${query}${startDate}${endDate}${pageCorresponds}`;
};

const NYTApi = (values, page) => {
    let historyParams = historyConverter(values, page);
    history.replaceState(null, "", `${historyParams}`);
    return fetch(urlConverter(values, page))
    .then(function (response) {
      return response.json()
    })
};

export default NYTApi;