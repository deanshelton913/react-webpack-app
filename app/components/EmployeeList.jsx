import React from 'react';
import EmployeeNew from './EmployeeNew.jsx';
import Employee from './Employee.jsx';
import reactMixin from 'react-mixin';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
const firebase = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');

require('../stylesheets/employee-list.scss');

export default class EmployeeList extends React.Component {

  constructor(){
    super();
  }

  componentWillMount (){
    this.bindAsArray(firebase, 'employees');
  }

  render(){
    var employees = [];
    this.state.employees.forEach((employee) => {
      let singleEmployee = <Employee
                            key={employee['.key']}
                            employee={employee}
                          />
      employees.push(singleEmployee);
    });

    return(
      <div className="employee-list">
        <div className="employees">
          {employees}
          <EmployeeNew />
        </div>
      </div>
    );
  }
}

reactMixin(EmployeeList.prototype, ReactFireMixin);