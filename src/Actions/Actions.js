export const addMovies = (movie) => ({
  type: 'ADD_MOVIES',
  movie
})

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export const RegisterAction = (newUser) => {
  return {
    type: 'REGISTER_ACTION',
    newUser
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const addFavorite = (favorite) => {
  return {
    type: 'ADD_FAVORITE',
    favorite
  }
}

export const removeFavorite = (favorite) => {
  return {
    type: 'REMOVE_FAVORITE',
    favorite
  }
}

export const setFavorites = (favorites) => {
  return {
    type: 'SET_FAVORITES',
    favorites
  }
}

export const clearFavorites = () => {
  return {
    type: 'CLEAR_FAVORITES'
  }
}
