import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import fetchArticles from '../../actions/ArticleActions';

class Container extends React.Component {

    render() {
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
}

const mapStateToProps = state => ({
    article: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchAction: (url) => dispatch(fetchArticles(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);