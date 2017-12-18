import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, clearFavorites } from '../../Actions/Actions';
import './NavBar.css'
import helper from '../../API/helper.js';
import { addMovies } from '../../Actions/Actions';
import PropTypes from 'prop-types';

const { fetchMovies } = helper;

class NavBar extends Component {


 async componentDidMount() {
    const getMovies = await fetchMovies();
    const movieData = this.props.addMovieFunction(getMovies);
}

logoutRedirect = (props) => {
  this.props.logout()
  this.props.clearFavorites();
  this.props.history.push('/login');
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
   let mappedName = this.props.user.map(name => name.data.name)
  return (
    <div className='nav-bar'>
      <p className = 'welcome'>Welcome, <span className = 'user'>{mappedName}</span></p>
      <NavLink className='nav' to='/'>Movies</NavLink>
      <NavLink className='nav' to='/favorites'>Favorites</NavLink>
      <button
        className = 'logout'
        onClick = {() => this.logoutRedirect()}>log out</button>
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
  },
    clearFavorites: () => {
      dispatch(clearFavorites());
    }
  }
}

NavBar.propTypes = {
addMovieFunction: PropTypes.func,
clearFavorites: PropTypes.func,
history: PropTypes.object,
location: PropTypes.object,
logout: PropTypes.func,
match: PropTypes.object,
user: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
