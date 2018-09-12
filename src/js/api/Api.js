import 'whatwg-fetch';

const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = '7b6416b1ffa44b7eba40cca2453a6e21';
const urlConverter = (values) => {
    let query = values.searchText ? '&q=' + values.searchText.split(' ').join('+') : '';
    let startDate = values.startDate ? '&begin_date=' + values.startDate.split('-').join('') : '';
    let endDate = values.endDate ? '&end_date=' + values.endDate.split('-').join('') : '';
    return `${API_URL}?api-key=${API_KEY}${query}${startDate}${endDate}`;
};

const NYTApi = (values) => {
  return fetch(urlConverter(values))
      .then(function (response) {
          return response.json()
      })
};

export default NYTApi;