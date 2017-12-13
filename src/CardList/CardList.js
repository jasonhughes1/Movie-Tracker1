import React, { Component } from 'react';

class CardList extends Component {

  async componentDidMount(){
    const movies = await fetchMovies();
  }
}
