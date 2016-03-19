import React from 'react';
import Moment from 'moment';
import Classnames from 'classnames';

// const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Appointment extends React.Component {

  render(){
    let name = this.props.appointment.first + ' ' + this.props.appointment.last;
    let time = Moment(this.props.appointment.time * 1000);
    let customerClasses = Classnames({
      'customer grid': true,
      'is-late': !(time > Moment())
    });
    return (
      <div className={customerClasses}><span className="unit half">{name}</span><span className="time unit half">{time.calendar()}</span></div>
    );
  }
}