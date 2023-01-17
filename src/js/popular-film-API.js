import { getPopularFilm } from '../js/fetchApi';
import * as pagination from './pagination';
import { refs } from './refs';

import { renderFilmCards } from './render-card';
import { renderSkeleton } from './skeleton';
import Spinner from './spinner';
const spinner = new Spinner();

  
const _getPopularFilm = () => {
  spinner.enable();
  
  getPopularFilm(pagination.getCurrentPage()).then(
    ({ page, results, total_pages, total_results }) => {
       renderSkeleton();
      setTimeout(() => {
        renderFilmCards(results);
      }, 800);
      spinner.disable();
    }
  );
};

_getPopularFilm();
pagination.subscribeOnPageChange(_getPopularFilm);
