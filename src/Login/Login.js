import React, {Component} from 'react';


export default class Login extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div className = 'login'>
        <h2>register</h2>

        <input
          placeholder = 'email'/>
        <input
          placeholder = 'password'/>

        <button>submit</button>
      </div>
    )
  }
}
