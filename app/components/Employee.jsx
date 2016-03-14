import React from 'react';

require('../stylesheets/employee.scss')

export default class Employee extends React.Component {
  render(){
    let firstName = this.props.employee.first;
    let image = this.props.employee.image;
    return (
      <div className="employee unit one-fourth">
        <img className="circle" src={image} />
        <p>{firstName}</p>
      </div>
    )
  }
}