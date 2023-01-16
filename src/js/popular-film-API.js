import { getPopularFilm } from '../js/fetchApi';
import * as pagination from './pagination';
import { refs } from './refs';

import { renderFilmCards } from './render-card';


  
const _getPopularFilm = () => {
  getPopularFilm(pagination.getCurrentPage()).then(
    ({ page, results, total_pages, total_results }) => {
      renderFilmCards(results);
    }
  );
};
//const cardsContaier = document.querySelector('.allcards-skeleton');
const cardsTemplate = `<li class="cards-skeleton">
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
let cardsSkeleton = '';
export const renderSkeleton = () => {
  for (let i = 1; i <= 20; i+=1) {
   
    cardsSkeleton = cardsSkeleton + cardsTemplate;
    
  }
  refs.mainContainerEl.innerHTML = cardsSkeleton;
  //console.log(cardsSkeleton);
  return;
}


_getPopularFilm();

pagination.subscribeOnPageChange(_getPopularFilm);
