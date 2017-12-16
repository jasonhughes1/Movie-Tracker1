async function fetchMovies(){
    const fetchMoviesData = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=020247bf421cd580aa7ceee48b183e05')
    const moviesData = await fetchMoviesData.json();
    const movies = await moviesData.results;
    const movie = await fetchMovie(movies)
  return Promise.all(movie)

  }
  async function fetchMovie(movie) {
     const movies = await movie.map( movie => {
      let title = movie.title;
      let overview = movie.overview;
      let poster = movie.poster_path;
      let vote = movie.vote_average;
      let backdrop = movie.backdrop_path;
      return {title, poster, vote, overview, backdrop, favorite: false}
    });

     return Promise.all(movies)
  }

  export const userLogin = async (data) => {
    try {
    const postUser = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    const initialPost = await postUser.json()
    return initialPost
    } catch(error){
      return false;
    }
  }

  export const userRegister = async (email, password, name) => {
    try {
      const registerUser = await fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: {'Content-Type': 'application/json'}
      })
      const initialRegister = await registerUser.json()
      return initialRegister
    } catch(error){
      return false;
    }
  }

  



  export default { fetchMovies, userLogin};
