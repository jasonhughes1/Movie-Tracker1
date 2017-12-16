import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Actions/Actions';
import './NavBar.css'
import helper from '../../API/helper.js';
import { addMovies } from '../../Actions/Actions';
const { fetchMovies } = helper;

class NavBar extends Component {


 async componentDidMount() {
    const getMovies = await fetchMovies();
    const movieData = this.props.addMovieFunction(getMovies);
}

render() {
  if(Object.keys(this.props.user).length === 0) {
  return (
    <div className='nav-bar'>
      <p className='logo'>MOVIE <span className = 'logo-two'>TRACKER</span></p>
      <NavLink className='nav' to='/'>Movies</NavLink>
      <NavLink className='nav' to='/login'>Login</NavLink>
      <NavLink className='nav' to='/register'>Register</NavLink>
    </div>
  )
}
 else {
  return (
    <div className='nav-bar'>
      <NavLink className='nav' to='/'>Movies</NavLink>
      <h4>Welcome</h4>
      <button onClick = {this.props.logout}>log out</button>
    </div>
  )
 }
}
}


export const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    },
     addMovieFunction: (getMovies) => {
    dispatch(addMovies(getMovies));
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
