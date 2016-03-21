import React from 'react';
import Classnames from 'classnames';

require('../stylesheets/appointment-new.scss')

// const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = {isOpen: false}
  }

  toggleOpen(){
    this.setState({isOpen: (this.state.isOpen ? false : true)});
  }

  render(){
    let formClasses = Classnames({
      'is-open': this.state.isOpen
    });

    let buttonText = this.state.isOpen ? 'Cancel' : '+ New Appointment'

    let buttonClasses = Classnames({
      'btn': true,
      'btn-primary': !this.state.isOpen,
      'btn-warning': this.state.isOpen,
      'add': true
    });

    return (
      <div className="well new appointment-new">
        <a className={buttonClasses} onClick={this.toggleOpen}>{buttonText}</a>
        <form className={formClasses}>
          <div className="form-group">
            <label>Customer Name</label>
            <input type="text" id="name" className="form-control" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" id="phone" className="form-control" placeholder="(555) 444-5555" />
          </div>
          <div className="form-group">
            <label>Date / Time</label>
            <div className="input-group date js-datetime">
              <input type="text" className="form-control" />
              <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="form-group">
            <label className="gender-label">Gender</label>
            <div className="radio-inline">
              <label>
                <input type="radio" name="gender" id="male" value="male" />Male
              </label>
            </div>
            <div className="radio-inline">
              <label>
                <input type="radio" name="gender" id="female" value="female" />
                Female
              </label>
            </div>
          </div>
          <button className="btn btn-success">Save Appointment</button>
        </form>
    </div>
    )
  }
}




