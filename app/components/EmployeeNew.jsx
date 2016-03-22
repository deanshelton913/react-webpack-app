import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import Classnames from 'classnames';
import LinkedStateMixin from 'react-addons-linked-state-mixin'

require('../stylesheets/employee-new.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');

export default class EmployeeNew extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      isOpen: false,
      name: '',
      appointments: [],
      avatar: ''
    };

    this.state = this.props.employee || this.defaultState;

    this.toggleForm = () => {
      this.setState({isOpen: this.state.isOpen ? false : true});
    }

    this.submit = () => {
      delete this.state.isOpen;
      ref.push(this.state); // update firebase
      this.setState(this.defaultState); // hide form
    }
  }

  render(){
    let employeeNewClasses = Classnames({
      'employee-new col employee well': true,
      'is-open': this.state.isOpen || this.props.employee
    });

    let buttonClasses = Classnames({
      'btn add-button': true,
      'btn-primary': !this.state.isOpen,
      'btn-warning': this.state.isOpen || this.props.employee
    });


    let buttonText = (this.state.isOpen || this.props.employee ? 'Cancel' : '+ Add Employee');

    return (
      <div className={employeeNewClasses}>
        <a className={buttonClasses} onClick={this.props.toggleEdit || this.toggleForm}>{buttonText}</a>
        <form>
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" id="name" className="form-control" placeholder="John Smith" valueLink={this.linkState('name')} />
          </div>
          <div className="form-group">
            <label>Employee Photo</label>
            <input type="text" id="photo" className="form-control" placeholder="http://www.myimage.com/image.png" valueLink={this.linkState('avatar')} />
          </div>
          <div className="form-group">
            <a className="btn btn-success" onClick={this.submit}>Save</a>
            </div>
        </form>
      </div>
    );
  }
}
reactMixin(EmployeeNew.prototype, ReactFireMixin);
reactMixin(EmployeeNew.prototype, LinkedStateMixin);