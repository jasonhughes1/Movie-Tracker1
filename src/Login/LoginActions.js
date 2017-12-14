import { userLogin }  from '../API/helper'

export const loginAction = (user) => {
  return async (dispatch) => {
     const callUser = await userLogin(user);
     console.log(callUser)
     return dispatch(loginSuccess(callUser.data));
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}
