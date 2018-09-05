import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../../actions/index';
import style from './ArticleList.scss';

class ArticleList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchArticles());
    }

    render() {

        return (
            <ul>
                {this.props.article.map((article) => {
                    return (
                        <li key={article._id} style={style}>
                            <div>
                                <div>
                                    <a href={article.web_url}>
                                        {article.headline.main}
                                    </a>
                                </div>
                                <div>
                                    {article.snippet}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );

    }

}

const mapStateToProps = state => ({
    articles: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error
});

export default connect(mapStateToProps)(ArticleList);