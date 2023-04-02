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

// https://api.themoviedb.org/3/movie/638974?api_key=f5f0f7761aa828c22a6b36bcb2f69855&language=en-US

export { fetchTrendingMovie, fetchMovieById };