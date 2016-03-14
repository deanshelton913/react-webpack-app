import React from 'react';
import Appointment from './Appointment.jsx';

require('../stylesheets/appointment-list.scss')

export default class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [
        {last: 'Jenkins', first: 'Adam', time: 1457734171 },
        {last: 'Smith', first: 'Toby', time: 1457724171 },
        {last: 'Shelton', first: 'Dean', time: 1457924171 },
        {last: 'Barnsworth', first: 'Glen', time: 1457934171 }
      ]
    }
  }

  render(){
    var appointments = [];
    this.state.appointments.forEach(function(appointment, index){
      appointments.push(<Appointment key={index} appointment={ appointment } />);
    });
    return(
      <div className="appointment-list">
        <h2>Customers</h2>
        {appointments}
      </div>
    )
  }
}