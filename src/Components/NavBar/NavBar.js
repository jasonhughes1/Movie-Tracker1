import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => {
  console.log('propsinnavbar', props);
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
    </div>
  )
}
}


export const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps, null)(NavBar)
