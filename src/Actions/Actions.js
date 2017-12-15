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
