import React from 'react';
import {shallow} from 'enzyme';
import Favorites from './Favorites';

let renderedFavorite;
beforeEach(() => {
   renderedFavorite = shallow(<Favorites />);
});

describe('Favorites Tests', () => {

  it.skip('should be defined', () => {
    expect(renderedFavorite).toBeDefined();
  });

  it.skip('should match snap shot', () => {
    expect(renderedFavorite).toMatchSnapshot();
  })
})
