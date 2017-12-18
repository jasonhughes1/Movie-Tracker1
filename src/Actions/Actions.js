export const addMovies = (movie) => ({
  type: 'ADD_MOVIES',
  movie
});

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
};

export const RegisterAction = (newUser) => {
  return {
    type: 'REGISTER_ACTION',
    newUser
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const setFavorites = (favorites) => {
  return {
    type: 'SET_FAVORITES',
    favorites
  };
};

export const clearFavorites = () => {
  return {
    type: 'CLEAR_FAVORITES'
  };
};
