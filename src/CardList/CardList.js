import React, { Component } from 'react';
import helper from '../API/helper.js';
import { connect } from 'react-redux';
import { addMovies } from './CardListActions.js';
const { fetchMovies } = helper;

class CardList extends Component {
  

  async componentDidMount(){
    const getMovies = await fetchMovies();
  }
    addMovies(getMovies)

  render(){
    return(
      <div>hello</div>
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
  addMovie: (getMovies) => {
    dispatch(addMovies(getMovies));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
