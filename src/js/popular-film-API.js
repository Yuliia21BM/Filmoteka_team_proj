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
const cardsContaier = document.querySelector('.main-section__allcards');
let cardsTemplate = `<li class="cards-skeleton">
        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
            </div>
            <div class="loading-btn"></div>
          </div>
        </div>
        </li>`;
const cardsSkeleton = '';
const renderSkeleton = () => {
  for (let i = 1; i <= 20; i+=1) {
    console.log('sdfs');
    cardsTemplate += cardsTemplate;
  }
  cardsContaier.innerHTML = cardsTemplate;
  return;
}

renderSkeleton();
_getPopularFilm();

pagination.subscribeOnPageChange(_getPopularFilm);
