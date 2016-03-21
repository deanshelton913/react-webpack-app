import React from 'react';
import AppointmentNew from './AppointmentNew.jsx';
import Appointment from './Appointment.jsx';

require('../stylesheets/employee.scss');

export default class Employee extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="col employee selected">
        <img src={this.props.employee.avatar} width="220" height="220" className="img-responsive" alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil"></i>
        <i className="remove hvr-buzz-out glyphicon glyphicon-remove"></i>
        <h4>{this.props.employee.name}</h4>
          <div className="appointments">
            <hr/>
            <AppointmentNew />
            <Appointment />
          </div>
      </div>
    )
  }
}
// reactMixin(Employee.prototype, ReactFireMixin);