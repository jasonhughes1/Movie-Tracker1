import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginAction } from './LoginActions.js';
import helper from '../API/helper.js';
const { userLogin } = helper;


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

handleChange = (key, event) => {
  this.setState({[key]: event.target.value})
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
        <button onClick={(event) => this.props.userLogin(this.state)}>submit</button>
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
    userLogin: (email, password) => {
      dispatch(loginAction(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
