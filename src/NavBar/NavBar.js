import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>JORGES NAV BAR</h1>
      <NavLink className='nav' to='/movies'>JORGES Movies</NavLink>
    </div>
  )
}

export default NavBar;
