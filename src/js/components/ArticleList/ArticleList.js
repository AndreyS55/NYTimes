import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './ArticleList.scss';

class ArticleList extends Component {

    render() {
        const { error, loading, article } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>
                Loading...
                <div className="container" style={style}>
                    <div className="item-1">{""}</div>
                    <div className="item-2">{""}</div>
                    <div className="item-3">{""}</div>
                    <div className="item-4">{""}</div>
                    <div className="item-5">{""}</div>
                </div>
            </div>;
        }

        return (
            <ul>
                {article.map(article => (
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
                    )
                )}
            </ul>
        );

    }

}

const mapStateToProps = state => ({
    article: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error,
    value: state.values
});

export default connect(mapStateToProps)(ArticleList);