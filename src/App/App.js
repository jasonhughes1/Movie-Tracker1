import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList/CardList'


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
