import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import './CardList.css'
import { addFavorite, loginSuccess } from '../../Actions/Actions';
import { fetchFavorites } from '../../API/helper.js';


class CardList extends Component {


addFavoriteMovie = async (movie) => {
  if(this.props.user[0]) {
    await fetchFavorites(movie, this.props.user[0].data.id);
    this.props.addFavorite(movie);
  } else {
    this.props.history.push('/login');
  }
}


  render() {
    const movieCards = this.props.movies.map((movie) => {
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

    return(
      <div className = 'card-list'>
       {movieCards}
      </div>
    )
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
    loginSuccess: (user) => {
      dispatch(loginSuccess(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
