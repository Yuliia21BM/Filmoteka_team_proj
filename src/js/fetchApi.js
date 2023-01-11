import axios from 'axios';
import { API_KEY, BASE_URL } from '../js/config';

// ------------Пошук по назві фільму-----------------
async function searchMovieForName(text, page = 1) {
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
async function getPopularFilm(page = 1) {
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
async function searchGenresFilms(name) {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US&name=${name}`
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

// -------------------- Фільми, які скоро вийдуть-------------

async function searchUpcomimgFilms() {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

export {
  searchMovieForName,
  getPopularFilm,
  searchMovieForId,
  searchGenresFilms,
  searchTrailerById,
  searchUpcomimgFilms,
};
