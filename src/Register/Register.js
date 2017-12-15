import React, {Component} from 'react';
import { userLogin, userRegister } from '../API/helper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginSuccess} from '../Login/LoginActions';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      signUpError: false,
      disabled: true,
      passwordError: false
    };
  }


  async handleRegister(event) {
    event.preventDefault();
    this.logInNewUser( await this.createNewUser());
  }


async createNewUser() {
  if (this.state.password === this.state.retypePassword) {
    const newUserData = await userRegister(
      this.state.email,
      this.state.password,
      this.state.name
    );
    return newUserData
  } else {
    this.setState({
      passwordError: true
    });
  }
}

async logInNewUser(newUserData) {
  if(newUserData.status === 'success') {
    const userData = await userLogin(this.state.email, this.state.password);
    this.props.loginSuccess(userData.data);
  } else {
    this.setState({
      signUpError: true
    });
  }
}


  handleChange(input, event) {
    this.setState({
      [input]: event.target.value,
      disabled: !this.state.email || !this.state.password || !this.state.name
    });
  }


  render() {
    return (
      <form onSubmit={(event) => this.handleRegister(event)}>
        {this.state.passwordError &&
          <h2>Passwords do not match, please try again.</h2>}
        {this.state.signUpError &&
          <h2>Email Already Exists, please login or use a different email!</h2>}
        {this.props.user.id && <Redirect to="/" />}
        <input
          type='text'
          placeholder='Name'
          onChange={(event) => this.handleChange('name', event)}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={(event) => this.handleChange('email', event)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => this.handleChange('password', event)}
        />
        <input
          type='password'
          placeholder='Please Retype Password'
          onChange={(event) => this.handleChange('retypePassword', event)}
        />
        <button type='submit'
          disabled={this.state.disabled}>
            Register
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: ( user ) => { dispatch(loginSuccess(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
