import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

let renderedCard;
beforeEach(() => {
   renderedCard = shallow(<Card />);
});


describe('Card Test', () => {

  it('should be defined', () => {
    

    expect(renderedCard).toBeDefined();
  });

  it.skip('should receive peops', () => {
    const mockData = {
      backdrop: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
      favorite: false,
      movieid: 181808,
      overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      poster_path: "/xGWVjewoXnJhvxKW619cMzppJDQ.jpg",
      release_date: "2017-12-13",
      title: "Star Wars: The Last Jedi",
      vote:7.5
    };
    expect(renderedCard).toEqual(mockData)
  })

  it('should match snap shot', () => {
    expect(renderedCard).toMatchSnapshot();
  })
})
