import React, { Component } from 'react';
import helper from '../API/helper.js';

const { fetchMovies } = helper;

class CardList extends Component {

  async componentDidMount(){
    const movies = await fetchMovies();
}
render(){
  return(
    <div>hello</div>
  )
}

}
export default CardList
