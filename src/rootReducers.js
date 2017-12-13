import { combineReducers } from 'redux';
import { addMoviesReducer } from '../src/CardList/CardListReducers';

const rootReducer = combineReducers({
  movies: addMoviesReducer
})

export default rootReducer;
