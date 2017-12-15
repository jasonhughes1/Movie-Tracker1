import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from './LoginActions.js';
import helper from '../API/helper.js';
import { browserHistory } from 'react-router-dom'
const { userLogin } = helper;



class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loginError: false
    }
  }

handleChange = (key, event) => {
  this.setState({[key]: event.target.value})
}

logIn = async (cred) => {
  const loggedIn = await userLogin(cred);

  if (loggedIn) {
    this.props.loginSuccess(loggedIn);
    this.props.history.push('/')
  } else {
    alert('invalid login');
  }
}


  render() {
    return(
      <div className = 'login'>
        <h2>LOGIN PAGE</h2>
        <input
          placeholder = 'email'
                 value={this.state.email}
              onChange={(event) => this.handleChange('email', event)}
        />
        <input
          placeholder = 'password'
                 value={this.state.passord}
              onChange={(event) => this.handleChange('password', event)}
        />
        <button onClick={(event) => this.logIn(this.state)}>submit</button>
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
    loginSuccess: (email, password) => {
      dispatch(loginSuccess(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
