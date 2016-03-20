import React from 'react';
// import Firebase from 'Firebase';
// import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin';
import AppointmentNew from './AppointmentNew.jsx';
import Appointment from './Appointment.jsx';

require('../stylesheets/employee.scss');

// const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    // this.deleteEmployee = this.deleteEmployee.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  // deleteEmployee(){
  //   ref.child(this.props.employee['.key']).remove();
  // }

  render(){
    return (
      <div className="col employee selected">
        <img src="http://api.randomuser.me/portraits/women/1.jpg" width="220" height="220" className="img-responsive" alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil"></i>
        <i className="remove hvr-buzz-out glyphicon glyphicon-remove"></i>
        <h4>Kim Lee</h4>
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