import React, { Component } from 'react';
import './ArticleList.scss';

class ArticleList extends Component {

    render() {
        const { error, loading, article } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>
                Loading...
                <div className="container">
                    <div className="item-1">{""}</div>
                    <div className="item-2">{""}</div>
                    <div className="item-3">{""}</div>
                    <div className="item-4">{""}</div>
                    <div className="item-5">{""}</div>
                </div>
            </div>;
        }

        return (
            <div className={'wrapper'}>
                <ul>
                    {article.map(article => (
                            <li key={article._id}>
                                <div>
                                    <div>
                                        <a href={article.web_url}>
                                            {article.headline.main}
                                        </a>
                                    </div>
                                    <div>
                                        <p>{article.snippet}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
        );

    }

}

export default ArticleList;