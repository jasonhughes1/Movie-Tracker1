import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './CardList.css'
import { addFavorite, loginSuccess, removeFavorite, setFavorites } from '../../Actions/Actions';
import { fetchFavorites, receiveFavorites, deleteFavorites } from '../../API/helper.js';


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

  // checkFavorites = async (movie) => {
  //  const movieFoundInFavs = this.props.favorites.find(favorite => {
  //    return favorite.title === movie.title
  //  })
  //  if(!movieFoundInFavs) {
  //    await fetchFavorites(movie, this.props.user[0].data.id);
  //    return this.props.addFavorite(movie);
  //  } else {
  //    const newFavs = await deleteFavorites(movie, this.props.user[0].data.id )
  //    return this.props.setFavorites(newFavs.data)
  //  }
  // }

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

    return (
      <div className = 'card-list'>
       {movieCards}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
