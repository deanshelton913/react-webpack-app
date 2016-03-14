import React from 'react';
import Firebase from 'Firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';


require('../stylesheets/employee-add.scss');

const ref = new Firebase('https://glaring-inferno-7699.firebaseio.com/employees');
export default class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.mixins = [ReactFireMixin];
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { first: '', last: '', queue: 0, image: '' }
  }

  handleChange(event){
    this.setState({first: event.target.value});
  }

  submit(){
    let images = [
      'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
      'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    ];
    this.state.image = images[Math.floor(Math.random()*images.length)] // pull random
    ref.push(this.state);
    this.setState({first: ''});
  }

  render(){
    return (
      <div className="grid">
        <div className="unit one-fourth">
          <input className="first" value={this.state.first} type="text" placeholder="First" onChange={this.handleChange} />
        </div>
        <div className="unit one-fourth">
          <button className="btn btn-warning" onClick={this.submit}>Add</button>
        </div>
      </div>
    );
  }
}
reactMixin(AddEmployee.prototype, ReactFireMixin);