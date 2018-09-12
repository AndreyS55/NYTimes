import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import './SearchForm.scss';

class SearchForm extends Component {

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="searchText"
                    component="input"
                    type="text"
                    placeholder="Search..."
                    className={'input'} />
                <button type="submit" className={'button'} >&#128269;</button>
                <label>
                    <p>Begin date</p>
                    <Field
                        name="startDate"
                        component="input"
                        type="date"
                        className={'bdate'} />
                </label>
                <label>
                    <p>End date</p>
                    <Field
                        name="endDate"
                        component="input"
                        type="date"
                        className={'edate'} />
                </label>
            </form>
        );
    }

}

SearchForm = reduxForm ({
    form: 'Search',
}) (SearchForm);

export default SearchForm;