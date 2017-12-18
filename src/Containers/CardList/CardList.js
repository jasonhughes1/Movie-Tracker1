import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import Backdrop from '../../Components/Backdrop/Backdrop';
import './CardList.css'
import { addFavorite, loginSuccess, removeFavorite, setFavorites } from '../../Actions/Actions';
import { fetchFavorites, receiveFavorites, deleteFavorites } from '../../API/helper.js';
import PropTypes from 'prop-types';


class CardList extends Component {

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
     await fetchFavorites(movie, this.props.user[0].data.id);
     const newFavs = await receiveFavorites(this.props.user[0].data.id);
     console.log(newFavs);
     return this.props.setFavorites(newFavs.data);
   } else {
     const deleteFavs = await deleteFavorites(movie, this.props.user[0].data.id )
     const newFavs = await receiveFavorites(this.props.user[0].data.id);
     console.log(newFavs);
     return this.props.setFavorites(newFavs.data)
   }
  }

  render() {

    const movieCards = this.props.movies.map((movie) => {

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
     />
   })

   let number = Math.floor(Math.random() * (20) * 1);
   const movieBackdrop = this.props.movies.map((movie) => {
     return movie.backdrop
   })

   const backdrop = movieBackdrop[number]


    return (
      <div className = 'card-list'>
        <Backdrop
          backdrop = {backdrop}
        />
        <div className = 'card-container'>
          {movieCards}
        </div>
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
    addFavorite: (favorite) => {
      dispatch(addFavorite(favorite));
    },
    removeFavorite: (favorite) => {
      dispatch(removeFavorite(favorite));
    },
    loginSuccess: (user) => {
      dispatch(loginSuccess(user))
    },
    setFavorites: (newFavorites) => {
      dispatch(setFavorites(newFavorites));
    }
  }
}

CardList.propTypes = {
addFavorite: PropTypes.func,
favorites: PropTypes.array,
history: PropTypes.object,
location: PropTypes.object,
loginSuccess: PropTypes.func,
match: PropTypes.object,
movies: PropTypes.array,
removeFavorite: PropTypes.func,
setFavorites: PropTypes.func,
user: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
