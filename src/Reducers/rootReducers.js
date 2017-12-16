import { combineReducers } from 'redux';
import { addMoviesReducer } from './Reducers';
import { user } from './Reducers';
import { newUser } from './Reducers';
// import { userLogout } from './Reducers';

const rootReducer = combineReducers({
  movies: addMoviesReducer,
  user,
  newUser
})

export default rootReducer;
