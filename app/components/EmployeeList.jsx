import React from 'react';
import Employee from './Employee.jsx';

require('../stylesheets/employee-list.scss')

export default class EmployeeList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { first: 'Sam', last: 'Smith', queue: 0, image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg' },
        { first: 'Ken', last: 'Barneby', queue: 1, image: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg' },
        { first: 'Sarah', last: 'Fineman', queue: 2, image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg' },
        { first: 'Brynn', last: 'Jo', queue: 3, image: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }
      ]
    }
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
      </div>
    )
  }
}