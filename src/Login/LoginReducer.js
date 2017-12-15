export const user = (store = [], action) => {
  switch(action.type) {
    case 'LOGIN_USER':
    return [...store, action.user]
    case 'LOGIN_SUCCESS':
    return [...store, action.user];
    case 'LOGIN_FAILURE':
    return [...store, action.user];
    default:
    return store;
  }
}
