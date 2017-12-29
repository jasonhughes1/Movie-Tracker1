import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';

describe('navBar tests', () => {
  let navBar;
  // const user = {id: 3, name: "norman", password: "1234", email: "1234"};
  const mockFunc = jest.fn();


  beforeEach( () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          results: ['array', 'of', 'movies']
        }
      )
    }));

    navBar = shallow(
      <NavBar
        favorites = {[]}
        addMovieFunction={mockFunc}
        clearFavorites={mockFunc}
        history={{hola: 'blah'}}
        location={{pathname: 'current-path'}}
        logout= {mockFunc}
        match={{hola: 'blah'}}
        user={[{data: {name: ''}}]}
      />);
    });

    it('should match the snapshot', () => {
      console.log(navBar);
      expect(navBar).toMatchSnapshot();
      });

    it('Should be defined', () => {
      expect(navBar).toBeDefined();
    })
  });
