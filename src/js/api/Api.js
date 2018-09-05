import 'whatwg-fetch';

const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7b6416b1ffa44b7eba40cca2453a6e21";

const NYTApi = () => {
  return fetch(API_URL)
      .then(function (response) {
          return response.json()
      })
};

export default NYTApi;