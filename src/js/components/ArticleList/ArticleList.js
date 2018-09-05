import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './ArticleList.scss';

class ArticleList extends Component {

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

function mapStateToProps(state) {
    return {
        article: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList);