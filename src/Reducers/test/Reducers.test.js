import * as actions from '../../Actions/Actions';
import { addMoviesReducer, user, favorite
 } from '../Reducers';

describe('Reducer Tests', () => {

 it('should return the default store', () => {
   const expected = []
   expect(addMoviesReducer(undefined, {})).toEqual(expected)
 });


it('should return a new state with movies added', () => {
  const movie = [{title: 'COCO'}, {title: 'Movie'}];

  const expected = [...movie]
  expect(addMoviesReducer(undefined, actions.addMovies(movie))).toEqual(expected)
  })

it('should return a new state with favorite removed', () => {
  const currentState = [{title: "Justice League"}]
  const expected = [];

  expect(favorite(currentState, actions.clearFavorites())).toEqual(expected)
})

it('should update the store when a movie is added', () => {
  const movie = [{title: 'Justice League'}]
  const expected = [...movie]
  
  expect(favorite(undefined, actions.setFavorites(movie))).toEqual(expected)
})

it('should have a default state for user ', () => {
  const defaultState = [];
  expect(user(undefined, {type: ''})).toEqual(defaultState)
})

it.skip('should return a new state when a user is logged in', () => {
  const user = {
    'email': 'email.com',
    'password': 'password',
    'loginError': false
  }
  const expectedState = [...user]
  expect(user(undefined, actions.loginSuccess(user))).toEqual(expectedState)
})

it('should log a user out', () => {
  const currentState = {
    email: 'email.com',
    password: 'password',
    loginError: false
  }
  const expected = {};


  expect(user(currentState, actions.logout())).toEqual(expected)
})
});
