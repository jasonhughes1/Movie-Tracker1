import * as actions from '../../Actions/Actions';
import { addMoviesReducer, user, newUser
 } from '../Reducers';

describe('Reducer Tests', () => {

 it('should return the default store', () => {
   const expected = []
   expect(addMoviesReducer(undefined, {})).toEqual(expected)
 });


it('should return a new state with movies added', () => {
  const movie = {title: "Justice League", poster: "/Zz.jpg", vote: 6.6, overview: "Fueled.", backdrop: "/o5T8MQB.jpg"}
  const expected = [movie]
  expect(addMoviesReducer(undefined, actions.addMovies(movie))).toEqual(expected)
  })

it.skip('should return a new state with favorite removed', () => {
  const currentState = [{title: "Justice League", poster: "/Zz.jpg", vote: 6.6, overview: "Fueled.", backdrop: "/o5T8MQB.jpg", id: 89090}]
  const expected = [];

  expect(favorite(currentState, actions.setFavorites(89090))).toEqual(expected)
})
});
