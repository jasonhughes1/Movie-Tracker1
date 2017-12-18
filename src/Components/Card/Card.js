import React from 'react';
import './Card.css';
import { browserHistory } from 'react-router-dom'



const Card = (props) => {
  const redirect = () => {
  // (!props.user.id) {
      props.addToFavorites(props.movie)
    }


  return (
    <div className = 'card'>
      <h1 className = 'title'>{props.title}</h1>
      <p className = 'overview'>{props.overview}</p>
      <div className = 'image-container'>
        <button onClick={() => redirect()}
          className = 'favorite'></button>
        <img className = 'poster' src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
      </div>
      <p className = 'vote'>{props.vote}</p>
    </div>
  )
}

export default Card;
