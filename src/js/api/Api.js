import 'whatwg-fetch';

const NYTApi = (url) => {
  return fetch(url)
      .then(function (response) {
          return response.json()
      })
};

export default NYTApi;