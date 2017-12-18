import { combineReducers } from 'redux';
import { addMoviesReducer } from './Reducers';
import { user } from './Reducers';
import { newUser } from './Reducers';
import { favorite } from './Reducers';


const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user,
  newUser,
  favorite
});

export default rootReducer;
