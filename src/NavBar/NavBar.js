import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <NavLink className='nav' to='/'>Movies</NavLink>
      <NavLink className='nav' to='/login'>Login</NavLink>
      <NavLink className='nav' to='/register'>Signin</NavLink>
    </div>
  )
}

export default NavBar;
