import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './CardList.css'
import { addFavorite } from '../../Actions/Actions';
import { fetchFavorites } from '../../API/helper.js';


class CardList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
    this.addFavorite = this.addFavorite.bind(this);
  }

 addFavorite(card)  {
    this.setState({favorites: [...this.state.favorites, card]})
  }


  render() {
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
    movies: store.movies,
    favorites: store.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (favorite) => {
      dispatch(addFavorite(favorite));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
