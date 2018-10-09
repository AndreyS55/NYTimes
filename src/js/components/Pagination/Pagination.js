import React, { Component } from 'react';
import queryString from 'query-string';
import styles from './Pagination.scss';

class Pagination extends Component {
    componentDidMount() {

    }

    render() {
        let queryParams = queryString.parse(location.search);
        let query = queryParams.query ? '&query=' + queryParams.query : '';
        let startDate = queryParams.begin_date ? '&begin_date=' + queryParams.begin_date : '';
        let endDate = queryParams.end_date ? '&end_date=' + queryParams.end_date : '';

        const { hits, values, fetchAction } = this.props;
        let pages = [];
        let pageCount = (Math.ceil(hits/10) <= 10) ? Math.ceil(hits/10) : 10;
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div className={styles.wrapper}>
                <div className={styles.pagination}>
                    <ul className={styles.pagination__list}>
                        {pages.map((page, index) => (
                            <li key={index}
                                className={styles.pagination__item}
                            >
                                <a href={`?${query}${startDate}${endDate}&page=${page}`} className={styles.pagination__link}>
                                    {page}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Pagination;