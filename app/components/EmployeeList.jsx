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
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    this.bindAsArray(firebase, 'employees');

  }

  update(employees, index){
    this.setState({employees: employees});
    const x = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees/' + index);
    x.remove();
  }


  render(){
    var employees = [];
    this.state.employees.forEach((employee) => {
      let singleEmployee =  <Employee
                        key={employee['.key']}
                        index={employee['.key']}
                        employee={employee}
                        employeeList={this.state.employees}
                        onChange={this.update}
                      />
      employees.push(singleEmployee);
    });

    return(
      <div className="employee-list">
        <div className="employees">
          <EmployeeNew />
          {employees}
        </div>
      </div>
    );
  }
}

reactMixin(EmployeeList.prototype, ReactFireMixin);