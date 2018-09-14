import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        const { hits } = this.props;
        let pages = [];
        for (let i = 1; i <= Math.ceil(hits/10); i++) {
            pages.push(i);
        }
        return (
            <div className={'Pagination'}>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index}
                            onClick={(page) => this.props.fetchAction(page)}
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