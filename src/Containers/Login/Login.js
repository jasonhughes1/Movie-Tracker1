import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../../Actions/Actions';
import helper from '../../API/helper.js';
import { browserHistory } from 'react-router-dom'
import './Login.css'

const { userLogin } = helper;



class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: 'jason@email.com',
      password: 'password',
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
        <h2 className='welcome-text'>Welcome Back!</h2>
        <input
          className = 'email'
          placeholder = 'email'
                 value={this.state.email}
              onChange={(event) => this.handleChange('email', event)}
        />
        <input
          className = 'password'
          placeholder = 'password'
                 value={this.state.passord}
              onChange={(event) => this.handleChange('password', event)}
        />
        <button
          className = 'submit-button'
          onClick={(event) => this.logIn(this.state)}>submit</button>
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
