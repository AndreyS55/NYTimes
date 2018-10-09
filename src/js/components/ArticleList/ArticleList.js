import React, { Component } from 'react';
import styles from './ArticleList.scss';

class ArticleList extends Component {
    dateConverter(date) {
        let myDate = new Date(date);
        return myDate.toDateString();
    }

    render() {
        const { error, loading, article } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className={styles.loader__wrapper}>
                <div className={styles.loader__container}>
                    <div className={styles.loader__item}>{""}</div>
                    <div className={styles.loader__item}>{""}</div>
                    <div className={styles.loader__item}>{""}</div>
                    <div className={styles.loader__item}>{""}</div>
                    <div className={styles.loader__item}>{""}</div>
                </div>
            </div>;
        }

        return (
            <div className={styles.wrapper}>
                <ul className={styles.article__list}>
                    {article.map(article => (
                        <li key={article._id} className={styles.article__item}>
                            <div>{article.multimedia.map(img => <img src={img.url} alt=""/>)}</div>
                            <div>
                                <div>
                                    <a href={article.web_url}>
                                        {article.headline.main}
                                    </a>
                                </div>
                                <div className={styles.item__pubDate}>{this.dateConverter(article.pub_date)}</div>
                                <div>
                                    <p>{article.snippet}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default ArticleList;