import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';


class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar />

          <h1 className="App-title">MovieTracker</h1>

      </div>
    );
  }
}

export default App;
