import React, { Component } from 'react';
import noImage from '../../../img/no-image.png';
import styles from './ArticleList.scss';

class ArticleList extends Component {
    dateConverter(date) {
        let myDate = new Date(date);
        return myDate.toDateString();
    }

    render() {
        const { error, loading, article } = this.props;
        const imgUrl = 'https://static01.nyt.com/';

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
                            <div>
                                <a href={article.web_url} className={styles.image__link}>
                                    <img src={article.multimedia[0] ? `${imgUrl}${article.multimedia[0].url}` : noImage}
                                         alt="article image"
                                         className={styles.article__image}/>
                                </a>
                            </div>
                            <div className={styles.article__description}>
                                <div>
                                    <a href={article.web_url} className={styles.article__headline}>
                                        {article.headline.main}
                                    </a>
                                </div>
                                <div className={styles.item__pubDate}>{this.dateConverter(article.pub_date)}</div>
                                <div>
                                    <p>{article.snippet}</p>
                                </div>
                                <div className={styles.keywords}>{article.keywords.map(keyword => (
                                    <a key={keyword.rank} href={`?&query=${keyword.value}`}>
                                        <div className={styles.keywords__item}>{keyword.value}</div>
                                    </a>
                                ))}
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