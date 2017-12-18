import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

let renderedNavBar;
beforeEach(() => {
   renderedNavBar = shallow(<NavBar />);
});
