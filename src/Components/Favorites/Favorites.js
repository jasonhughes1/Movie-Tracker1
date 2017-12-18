import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import CardList from '../../Containers/CardList/CardList'
import { fetchFavorites, deleteFavorites, receiveFavorites } from '../../API/helper.js';
import { setFavorites } from '../../Actions/Actions';

class Favorites extends Component {


  addFavoriteMovie = (movie) => {
    if(this.props.user[0]) {
     this.checkFavorites(movie);
    } else {
      this.props.history.push('/login');
    }
  }

  checkFavorites = async (movie) => {
   const movieFoundInFavs = this.props.favorites.find(favorite => {
     return favorite.title === movie.title
   })
   if(!movieFoundInFavs) {
     this.toggleFavorite(movie)
     await fetchFavorites(movie, this.props.user[0].data.id);
     const newFavs = await receiveFavorites(this.props.user[0].data.id);
     return this.props.setFavorites(newFavs.data);
   } else {
     const deleteFavs = await deleteFavorites(movie, this.props.user[0].data.id )
     const newFavs = await receiveFavorites(this.props.user[0].data.id);
     return this.props.setFavorites(newFavs.data)
   }
  }

  toggleFavorite = (movie) => {
  movie.isFavorite = !movie.isFavorite;
}

  render() {
    const favoriteMovies = this.props.favorites.map((movie) => {
     return <Card
       key = {movie.id}
       movie={movie}
       title = {movie.title}
       overview = {movie.overview}
       poster = {movie.poster_path}
       vote = {movie.vote}
       backdrop = {movie.backdrop}
       addToFavorites={this.addFavoriteMovie}
       user={this.props.user}
       isFavorite={movie.isFavorite}
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
    user: store.user,
    movies: store.movies,
    favorites: store.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavorites: (newFavorites) => {
      dispatch(setFavorites(newFavorites));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
