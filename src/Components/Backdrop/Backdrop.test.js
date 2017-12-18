import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './Backdrop';

let renderedBackdrop;
beforeEach(() => {
   renderedBackdrop = shallow(<Backdrop />);
});


describe('Backdrop Test', () => {

  it('should be defined', () => {


    expect(renderedBackdrop).toBeDefined();
  });


  it('should match snapshot', () => {
    expect(renderedBackdrop).toMatchSnapshot();
  })
})
