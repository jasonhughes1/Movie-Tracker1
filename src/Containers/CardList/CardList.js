import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './CardList.css'


class CardList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
    this.addFavorite = this.addFavorite.bind(this);
  }

 addFavorite(card)  {
  console.log(card)
    this.setState({favorites: [...this.state.favorites, card]})
  }


  render() {
    console.log(this.state.favorites);
    const movieCards = this.props.movies.map((movie) => {
     return <Card
       key = {movie.title}
       title = {movie.title}
       overview = {movie.overview}
       poster = {movie.poster}
       vote = {movie.vote}
       backdrop = {movie.backdrop}
       favorite={movie.favorite}
       favorites={this.addFavorite}
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
