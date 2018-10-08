import React from 'react';
import { DatePicker } from 'antd';

const renderDatePicker = ({input}) => (
    <div>
        <DatePicker {...input} />
    </div>
);

export default renderDatePicker