import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={CardList} key='CardList'/>
        <h1 className="App-title">MovieTracker</h1>
      </div>
    );
  }
}

export default App;
