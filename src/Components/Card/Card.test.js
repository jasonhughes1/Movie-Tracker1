import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

let renderedCard;
beforeEach(() => {
   renderedCard = shallow(<Card />);
});

describe('Card Test', () => {

  it('should be defined', () => {
    expect(renderedCard).toBeDefined();
  });

  it('should match snap shot', () => {
    expect(renderedCard).toMatchSnapshot();
  })
})
