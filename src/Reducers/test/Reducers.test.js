import * as actions from '../../Actions/Actions';
import { addMoviesReducer, user, newUser
 } from '../Reducers';

describe('Reducer Tests', () => {

 it('should return the default store', () => {
   const expected = []
   expect(addMoviesReducer(undefined, {})).toEqual(expected)
 });


it('should return a new state with movies added', () => {
  const movie =

  { backdrop: '/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
  favorite: false,
  movieid: 354912,
  overview:"Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
  poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
  release_date:"2017-10-27",
  title:"Coco",
  vote: 7.5 }



  const expected = [movie]
  expect(addMoviesReducer(undefined, actions.addMovies(movie))).toEqual(expected)
  })




it.skip('should return a new state with favorite removed', () => {
  const currentState = [{title: "Justice League", poster: "/Zz.jpg", vote: 6.6, overview: "Fueled.", backdrop: "/o5T8MQB.jpg", id: 89090}]
  const expected = [];

  expect(favorite(currentState, actions.setFavorites(89090))).toEqual(expected)
})
});
