import { getPopularFilm } from '../js/fetchApi';
import * as pagination from './pagination';

import { renderFilmCards } from './render-card';

const _getPopularFilm = () => {
  getPopularFilm(pagination.getCurrentPage()).then(
    ({ page, results, total_pages, total_results }) => {
      renderFilmCards(results);
    }
  );
};

_getPopularFilm();

pagination.subscribeOnPageChange(_getPopularFilm);
