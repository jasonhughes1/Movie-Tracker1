import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../src/Reducers/rootReducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = applyMiddleware(thunk, promise, logger)
const store = createStore(rootReducers, compose(middleware, devTools))

render(
  <BrowserRouter>
   <Provider store={ store } >
    <App />
  </Provider>
 </BrowserRouter>,
document.getElementById('root')
)
