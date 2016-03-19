import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import Faker from 'faker';

require('../stylesheets/employee-add.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { first: '', last: '', queue: 0, image: '' }
  }

  handleChange(event){
    this.setState({first: event.target.value});
  }

  submit(){
    this.state.image = Faker.image.avatar();
    ref.push(this.state);
    this.setState({first: ''});
  }

  render(){
    return (
      <div className="grid">
        <div className="unit one-fourth">
          <input className="first" value={this.state.first} type="text" placeholder="First" onChange={this.handleChange} />
          <input className="last" value={this.state.last} type="text" placeholder="Last" onChange={this.handleChange} />
        </div>
        <div className="unit one-fourth">
          <button className="btn btn-warning" onClick={this.submit}>Add</button>
        </div>
      </div>
    );
  }
}
reactMixin(AddEmployee.prototype, ReactFireMixin);