import React, { Component } from 'react';
import helper from '../API/helper.js';
import { connect } from 'react-redux';
import { addMovies } from './CardListActions.js';
import Card from '../Card/Card'
const { fetchMovies } = helper;

class CardList extends Component {


  async componentDidMount() {
    const getMovies = await fetchMovies();
   const movieData = this.props.addMovieFunction(getMovies);
}


  render(){
    const movieCards = this.props.movies.map((movie) => {
      // console.log(movie);
     return <Card
     title = {movie.title}
     overview = {movie.overview}
     poster = {movie.poster}
     vote = {movie.vote}
     backdrop = {movie.backdrop}
     />
   })

    return(
      <div>
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


const mapDispatchToProps = (dispatch) => {
 return {
  addMovieFunction: (getMovies) => {
    dispatch(addMovies(getMovies));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
