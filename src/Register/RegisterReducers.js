export const newUser = (store = [], action) => {
  switch (action.type) {
    case 'REGISTER_ACTION':
      return Object.assign({}, action.newUser);
    default:
      return store;
  }
}
