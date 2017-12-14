import React, {Component} from 'react';


export default class Register extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div className = 'register'>
        <h2>REGISTER PAGE</h2>
        <input
          placeholder = 'name'/>
        <input
          placeholder = 'email'/>
        <input
          placeholder = 'password'/>
        <button>submit</button>
      </div>
    )
  }
}
