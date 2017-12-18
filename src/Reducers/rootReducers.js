import { combineReducers } from 'redux';
import { addMoviesReducer, user, newUser, favorite } from './Reducers';



const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user,
  newUser,
  favorite
});

export default rootReducer;
