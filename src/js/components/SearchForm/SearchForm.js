import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import queryString from 'query-string';
import renderDatePicker from '../Datepicker/Datepicker';
import styles from './SearchForm.scss';

const queryParams = queryString.parse(location.search);

class SearchForm extends Component {

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className={styles.wrapper}>
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
                        <label className={styles.search__datepickerStart}>
                            <h4 className={styles.datepicker__name}>Begin date</h4>
                            <Field
                                name="startDate"
                                component={renderDatePicker}
                            />
                        </label>
                        <label className={styles.search__datepickerEnd}>
                            <h4 className={styles.datepicker__name}>End date</h4>
                            <Field
                                name="endDate"
                                component={renderDatePicker}
                            />
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

SearchForm = connect(
    state => ({
        initialValues: {
            searchText: queryParams.query,
            startDate: queryParams.begin_date ? queryParams.begin_date.slice(0,4) + '-' + queryParams.begin_date.slice(4,6) + '-' + queryParams.begin_date.slice(6) : null,
            endDate: queryParams.end_date ? queryParams.end_date.slice(0,4) + '-' + queryParams.end_date.slice(4,6) + '-' + queryParams.end_date.slice(6) : null,
        }
    })
)(SearchForm);

export default SearchForm;