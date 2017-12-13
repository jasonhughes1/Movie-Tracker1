import React, { Component } from 'react';
import helper from '../API/helper.js';
import { connect } from 'react-redux';
import { addMovies } from './CardListActions.js';
const { fetchMovies } = helper;

class CardList extends Component {
  async componentDidMount(){
    const getMovies = await fetchMovies();
    this.props.addMovies(addMovies)

  }

  render(){
    return(
      <div>hello</div>
    )
  }
}

const mapStateToProps = (store) => {
  addMovies: store.addMovies
}


const mapDispatchToProps = (dispatch) => {
  addMovies: (movies) => {
    dispatch(addMovies(movies));
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
