export const addMovies = (store = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
    return [...action.addMovies]
    default:
    return store;
  }
}
