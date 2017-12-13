import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducers from './rootReducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducers, devTools)

render(
  <BrowserRouter>
  <Provider store={ store } >
  <App />
</Provider>
</BrowserRouter>,
document.getElementById('root')
)
