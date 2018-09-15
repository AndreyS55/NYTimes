import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';
import fetchArticles from '../../actions/ArticleActions';

class Container extends React.Component {

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

const mapStateToProps = state => ({
    article: state.articles.items,
    hits: state.articles.hits,
    loading: state.articles.loading,
    error: state.articles.error,
    values: state.form
});

const mapDispatchToProps = dispatch => ({
    fetchAction: (values, page) => dispatch(fetchArticles(values, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);