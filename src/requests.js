const API_KEY = "61e0adce1ccd8f596281f5ec9ca6e2fe";

const request = {
  fetchTredding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchLatestMovies: `/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
};

export default request;

//////
//
// https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=en-US
// https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US
//fetchNetflixOriginals=https://api.themoviedb.org/3/discover/tv?api_key=61e0adce1ccd8f596281f5ec9ca6e2fe&with_networks=213
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.
// desc & include_adult=false & include_video=false & page=1 & with_watch_monetization_types=flatrate
// https://api.themoviedb.org/3/trending/all/week?api_key=61e0adce1ccd8f596281f5ec9ca6e2fe&language=en-US
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=61e0adce1ccd8f596281f5ec9ca6e2fe&language=en-US
// https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
// //////////
