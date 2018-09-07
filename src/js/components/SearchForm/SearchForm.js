import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../../actions/ArticleActions';
//import style from './SearchForm.scss';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            bdate: '',
            edate: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBdate = this.handleChangeBdate.bind(this);
        this.handleChangeEdate = this.handleChangeEdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChangeBdate (event) {
        this.setState({bdate: event.target.value});
    }

    handleChangeEdate (event) {
        this.setState({edate: event.target.value});
    }

    handleClick(event) {
        this.props.dispatch(fetchArticles(this.urlConverter()));
        event.preventDefault();
    }

    urlConverter() {
        return 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7b6416b1ffa44b7eba40cca2453a6e21' + (this.props.value.str ? '&q=' + this.props.value.str : '') + (this.props.value.bdate ? '&begin_date=' + this.props.value.bdate : '') + (this.props.value.edate ? '&end_date=' + this.props.value.edate : '');
    }

    render() {
        this.props.value.str = this.state.value.split(' ').join('+');
        this.props.value.bdate = this.state.bdate.split('-').join('');
        this.props.value.edate = this.state.edate.split('-').join('');

        return (
            <div>
                <form>
                    <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>
                    <input type="button" value="Submit" onClick={this.handleClick}/>
                    <label>
                        Begin date
                        <input type="date" id="begin" value={this.state.bdate} onChange={this.handleChangeBdate}/>
                    </label>
                    <label>
                        End date
                        <input type="date" id="end" value={this.state.edate} onChange={this.handleChangeEdate}/>
                    </label>
                </form>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    article: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error,
    value: state.values
});

export default connect(mapStateToProps)(SearchForm);