
import axios from 'axios';

const API_KEY = '8b3f9f93b217543bb23268b1f13b0854';

const BASE_URL = 'https://api.themoviedb.org/3';



// ------------Пошук по назві фільму-----------------
async function searchMovieForId(text, page = 1) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&page=${page}`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

// --------------------Популярні фільми----------------------
async function getPopularFilm(page) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const data = await fetchAPI.data;
    
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

// -----------------Пошук по id-----------------------
async function searchMovieForId(id) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

// ------------------------ Пошук по жанру фільму------------------------------
async function searchGenresFilms() {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

// --------------------трейлер фільму--------------------

async function searchTrailerForId(id) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export {
  searchMovieForId,
  getPopularFilm,
  searchMovieForId,
  searchGenresFilms,
  searchTrailerForId,
};
