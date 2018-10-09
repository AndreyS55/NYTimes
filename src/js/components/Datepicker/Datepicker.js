import React from 'react';
import { DatePicker } from 'antd';
// import moment from 'moment';

const renderDatePicker = ({ input }) => (
    <div>
        <DatePicker
            {...input}
        />
    </div>
);

export default renderDatePicker