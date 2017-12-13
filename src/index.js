import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducers from './rootReducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducers, devTools)

render(
  <Provider store={ store } >
  <App />
</Provider>,
document.getElementById('root')
)
