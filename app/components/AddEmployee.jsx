import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import Classnames from 'classnames';
import LinkedStateMixin from 'react-addons-linked-state-mixin'

require('../stylesheets/add-employee.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');

export default class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.defaultState = {
      isOpen: false,
      name: '',
      appointments: [],
      avatar: ''
    };
    this.state = this.defaultState;
  }

  cancel(){
    this.setState(this.defaultState); // hide form
  }

  toggleForm(){
    this.setState({isOpen: this.state.isOpen ? false : true});
  }

  submit(){
    delete this.state.isOpen;
    ref.push(this.state); // update firebase
    this.setState(this.defaultState); // hide form
  }

  render(){

    let classes = Classnames({
      'col employee': true,
      'add-employee': true,
      'is-open': this.state.isOpen
    });

    return (
      <div className={classes}>
        <a className="btn btn-primary add-button" onClick={this.toggleForm}>+ Add Employee</a>
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
            <a className="btn btn-warning cancel-button" onClick={this.cancel}>Cancel</a>
            </div>
        </form>
      </div>
    );
  }
}
reactMixin(AddEmployee.prototype, ReactFireMixin);
reactMixin(AddEmployee.prototype, LinkedStateMixin);