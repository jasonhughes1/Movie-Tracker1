import { combineReducers } from 'redux';
import { addMoviesReducer } from '../src/CardList/CardListReducers';
import { user } from '../src/Login/LoginReducer';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user
})

export default rootReducer;
