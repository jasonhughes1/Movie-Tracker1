export const addMoviesReducer = (store = [], action) => {
  switch (action.type){
  case 'ADD_MOVIES':
    return [...store, ...action.movie];
  default:
    return store;
  }
};

export const user = (store = [], action) => {
  switch (action.type) {
  case 'LOGIN_USER':
    return [...store, action.user];
  case 'LOGIN_SUCCESS':
    return [...store, action.user];
  case 'LOGOUT':
    return {};
  default:
    return store;
  }
};

export const favorite = (store = [], action) => {
  switch (action.type) {
  case 'SET_FAVORITES':
    return action.favorites;
  case 'CLEAR_FAVORITES':
    return [];
  default:
    return store;
  }
};
