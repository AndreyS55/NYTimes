import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from '../Datepicker/Datepicker';
import styles from './SearchForm.scss';

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
                                component={DatePicker}
                            />
                        </label>
                        <label className={styles.search__datepickerEnd}>
                            <h4 className={styles.datepicker__name}>End date</h4>
                            <Field
                                name="endDate"
                                component={DatePicker}
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

export default SearchForm;