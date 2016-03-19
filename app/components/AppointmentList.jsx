import React from 'react';
import Appointment from './Appointment.jsx';
import AddAppointment from './AddAppointment.jsx';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

require('../stylesheets/appointment-list.scss')

export default class AppointmentList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    var ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/appointments');
    this.bindAsArray(ref, 'appointments');
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
        <AddAppointment />
      </div>
    )
  }
}
reactMixin(AppointmentList.prototype, ReactFireMixin);