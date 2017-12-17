import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';

class Favorites extends Component {

  render() {
    const favoriteMovies = this.props.favorites.map((movie) => {
     return <Card
       key = {movie.id}
       movie={movie}
       title = {movie.title}
       overview = {movie.overview}
       poster = {movie.poster}
       vote = {movie.vote}
       backdrop = {movie.backdrop}
       addToFavorites={this.addFavoriteMovie}
       user={this.props.user}
     />
   })

    return (
      <div className = 'card-list'>
       {favoriteMovies}
      </div>
    );
 }
}

const mapStateToProps = (store) => {
  return {
    favorites: store.favorite
  }
}



export default connect(mapStateToProps, null)(Favorites);
 
