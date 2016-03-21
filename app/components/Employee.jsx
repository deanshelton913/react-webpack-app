import React from 'react';
import AppointmentNew from './AppointmentNew.jsx';
import AppointmentList from './AppointmentList.jsx';
import Classnames from 'classnames';

require('../stylesheets/employee.scss');

export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);
    this.state = {isSelected: false, isBeingEdited: false}
  }

  deleteEmployee(){
    delete this.props.employeeList[this.props.index];
    this.props.onChange(this.props.employeeList, this.props.index);
  }

  toggleEdit(){
    this.setState({isBeingEdited: (this.state.isBeingEdited ? false : true)});
  }

  toggleSelection(){
    this.setState({isSelected: (this.state.isSelected ? false : true)});
  }

  render(){
    let classes = Classnames({
      'col': true,
      'employee': true,
      'selected': this.state.isSelected
    });

    return (
      <div className={classes}>
        <img
          onClick={this.toggleSelection}
          src={this.props.employee.avatar}
          width="220"
          height="220"
          className="img-responsive"
          alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil" onClick={this.toggleEdit}></i>
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