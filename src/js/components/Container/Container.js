import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';
import fetchArticles from '../../actions/ArticleActions';

class Container extends React.Component {
    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        if(queryParams.query || queryParams.begin_date ||queryParams.end_date || queryParams.page) {
            this.props.values.searchText = queryParams.query;
            this.props.values.startDate = queryParams.begin_date;
            this.props.values.endDate = queryParams.end_date;
            this.props.fetchAction(this.props.values, queryParams.page);
        }
    }

    render() {
        if(this.props.hits <= 10) {
            return (
                <div className={'Container'}>
                    <SearchForm onSubmit={(values) => this.props.fetchAction(values)}/>
                    <ArticleList
                        article={this.props.article}
                        loading={this.props.loading}
                        error={this.props.error}
                    />
                </div>
            )
        }
            return (
                <div className={'Container'}>
                    <SearchForm onSubmit={(values) => this.props.fetchAction(values)}/>
                    <ArticleList
                        article={this.props.article}
                        loading={this.props.loading}
                        error={this.props.error}
                    />
                    <Pagination hits={this.props.hits}
                                values={this.props.values}
                                fetchAction={this.props.fetchAction}
                    />
                </div>
            )
    }

}

const mapStateToProps = (state, ownProps) => ({
    article: state.articles.items,
    hits: state.articles.hits,
    loading: state.articles.loading,
    error: state.articles.error,
    values: state.form,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    fetchAction: (values, page) => dispatch(fetchArticles(values, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);