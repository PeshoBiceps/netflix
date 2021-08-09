const API_KEY = 'ab1e1be9f5d2dc6c172658f32e6bb35f'

const url = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${url}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${url}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${url}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${url}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${url}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests