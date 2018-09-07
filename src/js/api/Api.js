import 'whatwg-fetch';
import connect from "react-redux/es/connect/connect";

const API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7b6416b1ffa44b7eba40cca2453a6e21";
//const PARAMS = '&q=' + this.props.value.str +'&begin_date=' + this.props.value.bdate + '&end_date=' + this.props.value.edate;
const NYTApi = (url) => {
  return fetch(url)
      .then(function (response) {
          return response.json()
      })
};

export default NYTApi;