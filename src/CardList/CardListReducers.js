export const addMoviesReducer = (store = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
    return [...store, ...action.movie]
    default:
    return store;
  }
}
