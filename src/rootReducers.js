import { combineReducers } from 'redux';
import { addMoviesReducer } from '../src/CardList/CardListReducers';
import { user } from '../src/Login/LoginReducer';
import { newUser } from '../src/Register/RegisterReducers';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user,
  newUser
})

export default rootReducer;
