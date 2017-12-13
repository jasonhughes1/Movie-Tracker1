import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducers from './rootReducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const store = createStore(rootReducers)

render(
  <Provider store={ store } >
  <App />
</Provider>,
document.getElementById('root')
)
