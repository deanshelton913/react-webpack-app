import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

require('../stylesheets/employee.scss')

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  deleteEmployee(){
    ref.child(this.props.employee['.key']).remove();
  }

  render(){
    return (
      <div className="employee unit one-fourth">
        <img className="circle" src={this.props.employee.image} />
        <p>{this.props.employee.first}</p>
        <button onClick={this.deleteEmployee}>Delete</button>
      </div>
    )
  }
}
reactMixin(Employee.prototype, ReactFireMixin);