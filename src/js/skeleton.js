import { refs } from './refs';

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
const cardsSkeleton = []; 


export const renderSkeleton = () => {
  for (let i = 1; i <= 20; i+=1) {
    cardsSkeleton.push(cardsTemplate);
  }
  refs.mainContainerEl.innerHTML = cardsSkeleton.join('');
  return;
}