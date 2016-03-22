import React from 'react';

export default class EmployeeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <img
          onClick={this.props.toggleSelection}
          src={this.props.employee.avatar}
          width="220"
          height="220"
          className="img-responsive"
          alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil" onClick={this.props.toggleEdit}></i>
        <i className="remove hvr-buzz-out glyphicon glyphicon-remove" onClick={this.props.deleteEmployee}></i>
        <h4>{this.props.employee.name}</h4>
      </div>
    );
  }
}