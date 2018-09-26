import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {

    render() {
        const { hits, values, fetchAction } = this.props;
        let pages = [];
        let pageCount = (Math.ceil(hits/10) <= 10) ? Math.ceil(hits/10) : 10;
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div className={'Pagination'}>
                <ul className={'Pages'}>
                    {pages.map((page, index) => (
                        <li key={index}
                            onClick={() => fetchAction(values.Search.values, page)}
                        >
                            {page}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Pagination;