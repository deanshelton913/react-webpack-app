import React from 'react';
import AppointmentNew from './AppointmentNew.jsx';
import AppointmentList from './AppointmentList.jsx';
import EmployeeNew from './EmployeeNew.jsx';
import EmployeeShow from './EmployeeShow.jsx';
import Classnames from 'classnames';

require('../stylesheets/employee.scss');

export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isSelected: false, isBeingEdited: false }

    this.deleteEmployee = () => {
      delete this.props.employeeList[this.props.index];
      this.props.onChange(this.props.employeeList, this.props.index);
    }

    this.toggleEdit = () => {
      this.setState({isBeingEdited: (this.state.isBeingEdited ? false : true)});
    }

    this.toggleSelection = () => {
      this.setState({isSelected: (this.state.isSelected ? false : true)});
    }
  }


  render(){
    let classes = Classnames({
      'col': true,
      'employee': true,
      'selected': this.state.isSelected,
      'beingEdited': this.state.isBeingEdited
    });
    let employeeView = (this.state.isBeingEdited ? <EmployeeNew
                                                employee={this.props.employee}
                                                toggleSelection={this.toggleSelection}
                                                toggleEdit={this.toggleEdit}
                                                deleteEmployee={this.deleteEmployee}
                                              /> : <EmployeeShow
                                                employee={this.props.employee}
                                                toggleSelection={this.toggleSelection}
                                                toggleEdit={this.toggleEdit}
                                                deleteEmployee={this.deleteEmployee}
                                              />
                        );

    return (
      <div className={classes}>
          {employeeView}
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