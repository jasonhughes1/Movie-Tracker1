import { combineReducers } from 'redux';
import { addMoviesReducer } from '../src/CardList/CardListReducers';
import { loginReducer } from '../src/Login/LoginReducer';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  login: loginReducer
})

export default rootReducer;
