import React from 'react';
// import Firebase from 'Firebase';
// import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin';

require('../stylesheets/employee.scss')

// const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
  }

  // deleteEmployee(){
  //   ref.child(this.props.employee['.key']).remove();
  // }

  render(){
    return (
      <div className="well new">
        <form>
          <div className="form-group">
            <label for="name">Customer Name</label>
            <input type="text" id="name" className="form-control" placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" className="form-control" placeholder="(555) 444-5555" />
          </div>
          <div className="form-group">
            <label for="datetime">Date / Time</label>
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
              <label for="male">
                <input type="radio" name="gender" id="male" value="male" />Male
              </label>
            </div>
            <div className="radio-inline">
              <label for="female">
                <input type="radio" name="gender" id="female" value="female" />
                Female
              </label>
            </div>
          </div>
        </form>
      <button className="btn btn-success">Save Appointment</button>
    </div>
    )
  }
}




