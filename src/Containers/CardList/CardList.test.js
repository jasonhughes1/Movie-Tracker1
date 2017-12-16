import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList Tests', () => {

  it.skip('should be defined', () => {
    const renderedCardList = shallow(<CardList />);

    expect(renderedCardList).toBeDefined();
  })

})
