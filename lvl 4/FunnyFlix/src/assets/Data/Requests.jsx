

const API_KEY = "0f863c91e0a82c7e4550cee8744a8147"

const requests = {
    fetchTvPopular:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`, 
}

export default requests







