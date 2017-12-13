import React, { Component } from 'react';
import './App.css';
import helper from '../API/helper.js';
import CardList from 'CardList';

const { fetchMovies } = helper;



class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <CardList />
      </div>
    );
  }
}

export default App;
