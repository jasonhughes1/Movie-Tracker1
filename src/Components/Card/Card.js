import React from 'react';
import './Card.css';
import { browserHistory } from 'react-router-dom'
import PropTypes from 'prop-types';



const Card = (props) => {

  const redirect = () => {
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
      <img className = 'backdrop' src={`https://image.tmdb.org/t/p/w500${props.backdrop}`} />
      <p className = 'vote'>{props.vote}</p>
    </div>
  )
}

Card.propTypes = {
addToFavorites: PropTypes.func,
backdrop: PropTypes.string,
movie: PropTypes.object,
overview: PropTypes.string,
poster: PropTypes.string,
title: PropTypes.string,
user: PropTypes.array,
vote: PropTypes.numb
}

export default Card;
