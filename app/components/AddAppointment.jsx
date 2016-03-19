import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import DateTimeField from 'react-bootstrap-datetimepicker';
// import Moment from 'moment';

require('../stylesheets/employee-add.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/appointments');
export default class AddAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.default = {
      name: '',
      phone: '',
      date: '1990-06-05',
      format: 'YYYY-MM-DD',
      inputFormat: 'DD/MM/YYYY',
      mode: 'date'
    };
    this.state = this.default;
  }

  submit() {
    ref.push(this.state);
    this.setState(this.default);
  }

  handleChange(date) {
    this.setState({
      date: date
    });
  }


  render(){
    const {date, format, mode, inputFormat} = this.state;
    return (
      <div className="grid">
        <div className="unit one-fourth">
          <input className="first" type="text" placeholder="First" valueLink={this.linkState('first')} />
          <input className="last" type="text" placeholder="Last" valueLink={this.linkState('last')} />
          <input className="phone" type="text" placeholder="Phone" valueLink={this.linkState('phone')} />
          <DateTimeField
            dateTime={date}
            format={format}
            viewMode={mode}
            inputFormat={inputFormat}
            onChange={this.handleChange}
          />
          <div className="unit one-fourth">
            <button className="btn btn-warning" onClick={this.submit}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
reactMixin(AddAppointment.prototype, ReactFireMixin);
reactMixin(AddAppointment.prototype, LinkedStateMixin);