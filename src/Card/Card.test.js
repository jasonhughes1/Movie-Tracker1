import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';


beforeEach(() => {
  const renderedCard = shallow(<Card />);
});


describe('Card Test', () => {

  it('should be defined', () => {
    

    expect(renderedCard).toBeDefined();
  });
})
