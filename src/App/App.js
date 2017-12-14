import React, { Component } from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js'

class App extends Component {



  render() {
    return (
      <div className="App">
        <h1 className="App-title">MovieTracker</h1>
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={CardList} key='CardList'/>
        <Route exact path='/login' component={Login} key='login' />
        <Route exact path='/register' component={Register} key='register' />
      </div>
    );
  }
}

export default App;
