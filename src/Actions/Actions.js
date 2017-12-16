export const addMovies = (movie) => ({
  type: 'ADD_MOVIES',
  movie
})

export const loginSuccess = (user) => {
  console.log('user', user);
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

// export const loginFailure = (user) => {
//   return {
//     type: 'LOGIN_FAILURE',
//     user
//   }
// }

export const RegisterAction = (newUser) => {
  console.log(newUser);
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
