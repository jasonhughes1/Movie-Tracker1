export const addMoviesReducer = (store = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
    return [...store, ...action.movie]
    default:
    return store;
  }
}

export const user = (store = [], action) => {
  switch(action.type) {
    case 'LOGIN_USER':
    return [...store, action.user]
    case 'LOGIN_SUCCESS':
    return [...store, action.user];
    // case 'LOGIN_FAILURE':
    // return [...store, action.user];
    case 'LOGOUT':
    return {};
    default:
    return store;
  }
}

export const newUser = (store = [], action) => {
  switch (action.type) {
    case 'REGISTER_ACTION':
      return Object.assign({}, action.newUser);
    default:
      return store;
  }
}
