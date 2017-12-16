import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Actions/Actions'

const NavBar = (props) => {


 const handleLogout = (props) => {
  logout()
}


  if(Object.keys(props.user).length === 0) {
  return (
    <div className='nav-bar'>
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
      <button onClick = {handleLogout}>log out</button>
    </div>
  )
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
