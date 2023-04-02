import axios from "axios";
const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = 'f5f0f7761aa828c22a6b36bcb2f69855'

async function fetchTrendingMovie() {
    const response = await axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}`);
    return response;
}
async function fetchMovieById(value) {
    const response = await axios.get(`${API_URL}movie/${value}?api_key=${API_KEY}&language=en-US`);
    return response;
}
async function fetchCreditsById(value) {
    const response = await axios.get(`${API_URL}movie/${value}/credits?api_key=${API_KEY}&language=en-US`);
    return response;
}
async function fetchReviewsById(value) {
    const response = await axios.get(`${API_URL}movie/${value}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response;
}
async function fetchMovieByTitle(value) {
    const response = await axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`);
    return response;
}
// https://api.themoviedb.org/3/search/movie?api_key=f5f0f7761aa828c22a6b36bcb2f69855&language=en-US&query=King&page=1&include_adult=false

export {
    fetchTrendingMovie,
    fetchMovieById,
    fetchCreditsById,
    fetchReviewsById,
    fetchMovieByTitle,
};