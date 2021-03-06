import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/date-picker.css';

export default class DateSelector extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            className="dateInput"
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat='DD/MM/YYYY'
        />;
    }
}