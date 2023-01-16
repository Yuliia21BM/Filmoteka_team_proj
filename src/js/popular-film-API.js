import { getPopularFilm } from '../js/fetchApi';
import * as pagination from './pagination';

import { renderFilmCards } from './render-card';
import Spinner from './spinner';
const spinner = new Spinner();


  
const _getPopularFilm = () => {
  spinner.enable();
  
  getPopularFilm(pagination.getCurrentPage()).then(
    ({ page, results, total_pages, total_results }) => {
      renderFilmCards(results);
      spinner.disable();
    }
  );
};

_getPopularFilm();

pagination.subscribeOnPageChange(_getPopularFilm);
