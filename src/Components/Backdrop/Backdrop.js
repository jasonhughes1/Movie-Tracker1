import React from 'react';
import './Backdrop.css';
import { browserHistory } from 'react-router-dom'

const Backdrop = (props) => {
  // let number = Math.floor(Math.random() * (20) * 1);
  // console.log([props.backdrop]);
  // const backdrop = props.backdrop[number]

  return (
    // let number = await Math.floor(Math.random() * (20) * 1)
    <div className = 'backdrop-container'>
    <div className = 'backdrop-gradient'></div>
      <img className = 'backdrop' src={`https://image.tmdb.org/t/p/w500${props.backdrop}`} />
    </div>
  )
}

export default Backdrop;
