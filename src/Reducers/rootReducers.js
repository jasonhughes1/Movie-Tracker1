import { combineReducers } from 'redux';
import { addMoviesReducer, user, favorite } from './Reducers';



const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user,
  favorite
});

export default rootReducer;
