import { addMoviesReducer } from '../Reducers/Reducers';
import CardListActions from './CardListActions';

describe('CardList Reducer', () => {

 it('should return the default store', () => {
   const expected = []
   expect(addMoviesReducer(undefined, {})).toEqual(expected)
 });

});
