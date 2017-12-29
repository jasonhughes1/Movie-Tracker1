import * as actions from './Actions';

describe('all actions', () => {
  it('has a type of ADD_MOVIES', () => {
    const movie = {
      title: "Justice League",
      poster: "/9.jpg",
      vote: 6.6,
      overview: "Fueled by.",
      backdrop: "/o5B.jpg"
    };
    const expected = {
      type: 'ADD_MOVIES',
      movie
    };
    expect(actions.addMovies(movie)).toEqual(expected);
  });
});


it('has a type of LOGIN_SUCCESS', () => {
  const user = {id: 3, name: "norman", password: "1234", email: "1234"};
  const expected = {
    type: 'LOGIN_SUCCESS',
    user
  };
  expect(actions.loginSuccess(user)).toEqual(expected);
});


it('has a type of REGISTER_ACTION', () => {
  const newUser = {id: 3, name: "norman", password: "1234", email: "1234"};
  const expected = {
    type: 'REGISTER_ACTION',
    newUser
  };
  expect(actions.RegisterAction(newUser)).toEqual(expected);
});

it('has a type of LOGOUT', () => {
  expect(actions.logout()).toBeDefined();
});


it('has a type of SET_FAVORITES', () => {
  const favorites = {
    title: "Justice League",
    poster: "/9.jpg",
    vote: 6.6,
    overview: "Fueled by.",
    backdrop: "/o5B.jpg"
  };
  const expected = {
    type: 'SET_FAVORITES',
    favorites
  };
  expect(actions.setFavorites(favorites)).toEqual(expected);
});

it('has a type of CLEAR_FAVORITES', () => {
  expect(actions.clearFavorites()).toBeDefined();
});
