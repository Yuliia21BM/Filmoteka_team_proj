import { getPopularFilm } from '../js/fetchApi';

import { renderFilmCards } from './render-card';

let currentPage = 1;

getPopularFilm(currentPage).then(
  ({ page, results, total_pages, total_results }) => {
    renderFilmCards(results);
  }
);
