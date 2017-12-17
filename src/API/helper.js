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
      let movieid = movie.id;
      let release_date= movie.release_date;

      return {movieid, release_date, title, poster, vote, overview, backdrop, favorite: false}
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

  export const fetchFavorites = async (movie, userid) => {
    try {
      console.log('movie', movie);
      const fetchFavorites = await
      fetch('/api/users/favorites/new', {
        method: 'POST',
        body: JSON.stringify({
          movie_id: movie.movieid,
          user_id: userid,
          title: movie.title,
          poster_path: movie.poster,
          release_date: movie.release_date,
          vote_average: movie.vote,
          overview: movie.overview
          }),
        headers: {'Content-Type': 'application/json'}
      })
      const favoriteData = await fetchFavorites.json();
      return favoriteData
    } catch (err) {
      return false;
    }
  }




  export default { fetchMovies, userLogin, userRegister, fetchFavorites };
