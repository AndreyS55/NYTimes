import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './SearchForm.scss';

class SearchForm extends Component {

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.search__header}>Search for the articles you want</h2>
                <form onSubmit={handleSubmit} className={styles.search__form}>
                    <div className={styles.search__field}>
                        <Field
                            name="searchText"
                            component="input"
                            type="text"
                            placeholder="Search..."
                            className={styles.search__input} />
                        <button type="submit" className={styles.search__submit} />
                    </div>
                    <div className={styles.search__datepickers}>
                        <label>
                            <p>Begin date</p>
                            <Field
                                name="startDate"
                                component="input"
                                type="date"
                                className={styles.search__datepickerStart} />
                        </label>
                        <label>
                            <p>End date</p>
                            <Field
                                name="endDate"
                                component="input"
                                type="date"
                                className={styles.search__datepickerEnd} />
                        </label>
                    </div>

                </form>
            </div>
        );
    }

}

SearchForm = reduxForm ({
    form: 'Search',
}) (SearchForm);

export default SearchForm;