import React from 'react';
// import Firebase from 'Firebase';
// import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin';
import AppointmentNew from './AppointmentNew.jsx';
import Appointment from './Appointment.jsx';
import Faker from 'faker';

require('../stylesheets/employee.scss');

// const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class Employee extends React.Component {

  constructor(props) {
    super(props);
    this.randomPhoto = this.randomPhoto.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  // deleteEmployee(){
  //   ref.child(this.props.employee['.key']).remove();
  // }

  randomPhoto() {
    var rand = Math.ceil(Math.random() * (1 - 75) + 75)
    return 'http://api.randomuser.me/portraits/' + (rand % 2 === 0 ? 'men' : 'women') + '/' + rand + '.jpg';
  }

  render(){
    return (
      <div className="col employee selected">
        <img src={this.randomPhoto()} width="220" height="220" className="img-responsive" alt="Generic employee thumbnail" />
        <i className="edit hvr-grow-shadow glyphicon glyphicon-pencil"></i>
        <i className="remove hvr-buzz-out glyphicon glyphicon-remove"></i>
        <h4>{Faker.name.firstName()} {Faker.name.lastName()}</h4>
          <div className="appointments">
            <hr/>
            <AppointmentNew />
            <Appointment />
          </div>
      </div>
    )
  }
}
// reactMixin(Employee.prototype, ReactFireMixin);