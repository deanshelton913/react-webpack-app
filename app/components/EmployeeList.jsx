import React from 'react';
import Employee from './Employee.jsx';
import AddEmployee from './AddEmployee.jsx';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

require('../stylesheets/employee-list.scss');

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.mixins = [ReactFireMixin];
    this.state = {
      employees: []
    }
  }

  componentWillMount() {
    var ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
    this.bindAsArray(ref, 'employees');
  }

  render(){
    var employees = [];
    this.state.employees.forEach(function(employee, index){
      employees.push(<Employee key={index} employee={ employee } />);
    });
    return(

      <div className="employee-list grid">
        <h2>Employees</h2>
        {employees}
        <AddEmployee />
      </div>
    );
  }
}

reactMixin(EmployeeList.prototype, ReactFireMixin);