import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import Classnames from 'classnames';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import _ from 'underscore';
require('../stylesheets/employee-new.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');

export default class EmployeeNew extends React.Component {
  constructor(props) {
    super(props);

    let defaults = {
      isOpen: this.props.isOpen || false,
      name: '',
      appointments: [],
      avatar: ''
    };
    this.defaultState = _.extend(defaults, this.props.employee);
    this.state = this.defaultState;

    this.cancel = () => {
      this.setState(this.defaultState); // hide form
    }

    this.toggleForm = () => {
      this.props.beingUpdated ? this.props.handleToggleEmployeeEdit() : this.setState({isOpen: this.state.isOpen ? false : true});
    }

    this.update = () => {
      ref.child(this.state['.key']).update(_.omit(this.state,'.key'));
      this.props.handleToggleEmployeeEdit();
      this.props.handleToggleEmployeeSelection();
    }

    this.add = () => {
      ref.push(this.state); // update firebase
      this.setState(this.defaultState); // hide form
    }

    this.submit = () => {
      (this.state['.key'] ? this.update() : this.add());
    }
  }

  render(){
    let classes = Classnames({
      'well employee-new col employee': true,
      'is-open': this.state.isOpen
    });

    let btnClasses = Classnames({
      'btn add-button': true,
      'btn-primary': !this.state.isOpen,
      'btn-warning': this.state.isOpen
    });

    var btnText = (this.state.isOpen ? 'Cancel' : '+ Add Employee')

    return (
      <div className={classes}>
        <a className={btnClasses} onClick={this.toggleForm}>{btnText}</a>
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