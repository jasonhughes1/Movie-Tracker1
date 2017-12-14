import React, {Component} from 'react';


export default class Register extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div className = 'register'>
        <h2>register</h2>
        <input
          placeholder = 'name'/>
        <input
          placeholder = 'email'/>
        <input
          placeholder = 'password'/>
        <input
          placeholder = 're-eneter password'/>
        <button>submit</button>
      </div>
    )
  }
}
