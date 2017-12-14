import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginAction } from './LoginActions.js';


class Login extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div className = 'login'>
        <h2>LOGIN PAGE</h2>
        <input
          placeholder = 'email'/>
        <input
          placeholder = 'password'/>
        <button>submit</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginFunction: () => {
      dispatch(loginAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
