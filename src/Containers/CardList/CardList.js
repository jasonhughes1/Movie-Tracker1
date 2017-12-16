import React, { Component } from 'react';

import { connect } from 'react-redux';

import Card from '../../Components/Card/Card';
import './CardList.css'


class CardList extends Component {


 
  render() {
    const movieCards = this.props.movies.map((movie) => {
     return <Card
       key = {movie.title}
       title = {movie.title}
       overview = {movie.overview}
       poster = {movie.poster}
       vote = {movie.vote}
       backdrop = {movie.backdrop}
     />
   })

    return(
      <div className = 'card-list'>
       {movieCards}
      </div>
    )
 }
}


const mapStateToProps = (store) => {
  return {
    movies: store.movies
  }
}


// const mapDispatchToProps = (dispatch) => {
//  return {
//   addMovieFunction: (getMovies) => {
//     dispatch(addMovies(getMovies));
//    }
//   }
// }

export default connect(mapStateToProps, null)(CardList);
