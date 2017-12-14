import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
      <img src={`https://image.tmdb.org/t/p/w500${props.backdrop}`} />
      <p>{props.vote}</p>

    </div>
  )
}

export default Card;
