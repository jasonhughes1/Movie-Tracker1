async function fetchMovies(){
    const fetchMoviesData = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=020247bf421cd580aa7ceee48b183e05')
    const moviesData = await fetchMoviesData.json();
    const movies = await moviesData.results;
    // const movie = movies.map( movie => {
    //   let title = movie.title;
    //   let overview = movie.overview;
    //   let poster = movie.poster_path;
    //   let backdrop = movie.backdrop_path;
    //   let vote = movie.vote_average;
      // console.log(title)
      // console.log(overview)
      // console.log('---------------');
    // });
  return Promise.all(movies)
  }

  export default { fetchMovies };
