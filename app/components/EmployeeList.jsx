import React from 'react';
import AddEmployee from './AddEmployee.jsx';
import Employee from './Employee.jsx';
import reactMixin from 'react-mixin';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
const firebase = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');

require('../stylesheets/employee-list.scss');

export default class EmployeeList extends React.Component {

  componentWillMount(){
    this.bindAsArray(firebase, 'employees');
  }

  render(){
    var employees = [];
    this.state.employees.forEach((employee, index) => {
      employees.push(<Employee key={index} employee={employee} />);
    });

    return(
      <div className="employee-list">

        <div className="employees"><AddEmployee />{employees}</div>
      </div>
    );
  }
}

reactMixin(EmployeeList.prototype, ReactFireMixin);