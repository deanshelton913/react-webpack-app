import React from 'react';
import AppointmentNew from './AppointmentNew.jsx';
import AppointmentList from './AppointmentList.jsx';

require('../stylesheets/employee.scss');

export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(){
    delete this.props.employeeList[this.props.index];
    this.props.onChange(this.props.employeeList, this.props.index);
  }

  render(){
    return (
      <div className="col employee selected">
        <img src={this.props.employee.avatar} width="220" height="220" className="img-responsive" alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil"></i>
        <i className="remove hvr-buzz-out glyphicon glyphicon-remove" onClick={this.deleteEmployee}></i>
        <h4>{this.props.employee.name}</h4>
          <div className="appointments">
            <hr/>
            <AppointmentNew />
            <AppointmentList appointments={this.props.employee.appointments || []} />
          </div>
      </div>
    )
  }
}
// reactMixin(Employee.prototype, ReactFireMixin);