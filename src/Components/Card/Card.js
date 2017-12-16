import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className = 'card'>
      <h1 className = 'title'>{props.title}</h1>
      <p className = 'overview'>{props.overview}</p>
      <div className = 'image-container'>
        <button className = 'favorite'></button>
        <img className = 'poster' src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
      </div>
      <img className = 'backdrop' src={`https://image.tmdb.org/t/p/w500${props.backdrop}`} />
      <p className = 'vote'>{props.vote}</p>
    </div>
  )
}

export default Card;
