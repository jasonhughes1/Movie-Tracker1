import React from 'react';
import { shallow, mount } from 'enzyme';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';

describe('favorites tests', () => {
  let favorites;
  beforeEach( () => {
    const mockFunc = jest.fn();
    favorites = shallow(
      <Favorites
        favorites={['array']}
        history={{hola: 'blah'}}
        location={{pathname: 'current-path'}}
        match={{hola: 'blah'}}
        movies={['coco']}
        setFavorites={mockFunc}
        user={['blah']}
      />);
    });

    it('should match the snapshot', () => {
      expect(favorites).toMatchSnapshot();
      });

    it('Should be defined', () => {
      expect(favorites).toBeDefined();
    })
  });

    describe('map state to props', () => {
      it('should receive movies from the store', () => {
        const mockStore = {
          movies: [{title: 'Star Wars'}]
        }
        const expected = mapStateToProps(mockStore)
        expect(expected.movies).toEqual(mockStore.movies)
      })

      describe('mapDispatchToProps', () => {
       let mockDispatch;
       let result;

       beforeEach(() => {
         mockDispatch = jest.fn();
         result = mapDispatchToProps(mockDispatch);
       });

       it('should call dispatch when setFavorites is called', () => {
         result.setFavorites();
         expect(mockDispatch).toHaveBeenCalled();
       });

       it('should call dispatch when removeFav is called', () => {
         result.setFavorites();
         expect(mockDispatch).toHaveBeenCalled();
       });
     });
  })
