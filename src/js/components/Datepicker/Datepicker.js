import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class renderDatePicker extends React.Component {

    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (date) {
        this.props.input.onChange(moment(date).format('YYYY-MM-DD'));
    }

    render () {
        const {
            input, placeholder,
            meta: {touched, error}
        } = this.props;

        return (
            <div>
                <DatePicker
                    {...input}
                    placeholder={placeholder}
                    dateFormat="YYYY-MM-DD"
                    selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
                    onChange={this.handleChange}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
}

export default renderDatePicker;