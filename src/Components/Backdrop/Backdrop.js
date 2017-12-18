import React from 'react';
import './Backdrop.css';
import { browserHistory } from 'react-router-dom'

const Backdrop = (props) => {

  return (
    <div className = 'backdrop-container'>
      <h3>MOVIE<span> TRACKER</span></h3>
      <img className = 'backdrop' src={`https://image.tmdb.org/t/p/w500${props.backdrop}`} />
    </div>
  )
}

export default Backdrop;
