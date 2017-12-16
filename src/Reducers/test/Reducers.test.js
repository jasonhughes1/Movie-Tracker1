import * as actions from '../../Actions/Actions';
import { addMoviesReducer, user, newUser
 } from '../Reducers';

describe('Reducer Tests', () => {

 it('should return the default store', () => {
   const expected = []
   expect(addMoviesReducer(undefined, {})).toEqual(expected)
 });
});

// it('should return a new state with movies added', () => {
//   const movie = {title: "Justice League", poster: "/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg", vote: 6.6, overview: "Fueled by his restored faith in humanity and inspi… are on the hunt for three Mother Boxes on Earth.", backdrop: "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg"}
//   const expected = [movie]
//   expect(addMoviesReducer(actions.addMovies(movie))).toEqual(expected)
// })
