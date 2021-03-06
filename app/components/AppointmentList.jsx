import React from 'react';
import Appointment from './Appointment.jsx';

require('../stylesheets/appointment-list.scss')

export default class AppointmentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    var appointments = [];
    this.props.appointments.forEach(function(appointment, index){
      appointments.push(<Appointment key={index} appointment={ appointment } />);
    });

    return(
      <div className="appointment-list">
        {appointments}
      </div>
    )
  }
}