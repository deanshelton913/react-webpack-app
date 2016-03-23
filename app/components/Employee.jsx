import React from 'react';
import AppointmentNew from './AppointmentNew.jsx';
import AppointmentList from './AppointmentList.jsx';
import EmployeeNew from './EmployeeNew.jsx';
import EmployeeShow from './EmployeeShow.jsx';
import Classnames from 'classnames';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

require('../stylesheets/employee.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isSelected: false, isBeingEdited: false }

    this.handleEmployeeDelete = () => {
      ref.child(this.props.employee['.key']).remove();
    }

    this.handleToggleEmployeeEdit = () => {
      this.setState({isBeingEdited: (this.state.isBeingEdited ? false : true)});
    }

    this.handleToggleEmployeeSelection = () => {
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

    let show = <EmployeeShow
      isOpen={false}
      employee={this.props.employee}
      handleToggleEmployeeSelection={this.handleToggleEmployeeSelection}
      handleToggleEmployeeEdit={this.handleToggleEmployeeEdit}
      handleEmployeeDelete={this.handleEmployeeDelete}
    />

    let update = <EmployeeNew
      beingUpdated={true}
      isOpen={true}
      employee={this.props.employee}
      handleToggleEmployeeSelection={this.handleToggleEmployeeSelection}
      handleToggleEmployeeEdit={this.handleToggleEmployeeEdit}
    />

    return (
      <div className={classes}>
          {this.state.isBeingEdited ? update : show }
          <div className="appointments">
            <hr/>
            <AppointmentNew />
            <AppointmentList appointments={this.props.employee.appointments || []} />
          </div>
      </div>
    )
  }
}


reactMixin(Employee.prototype, ReactFireMixin);