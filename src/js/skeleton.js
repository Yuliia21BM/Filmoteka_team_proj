import { refs } from './refs';

const upcomingListRef2 = document.querySelector('.swiper-wrapper');
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
const cardsSkeletonSlider = [];
const cardsTemplateSlider = ` <li class="upcoming-card swiper-slide" style="margin-right:20px;">
        <div class="movie--isloading-slider">
          <div class="loading-image-slider"></div>
        </div>
        </li>`;

export const renderSkeleton = () => {
  for (let i = 1; i <= 20; i+=1) {
    cardsSkeleton.push(cardsTemplate);
  }
  refs.mainContainerEl.innerHTML = cardsSkeleton.join('');
  return;
}
export const renderSkeletonSlider = () => {
  for (let j = 1; j <= 6; j+=1) {
    cardsSkeletonSlider.push(cardsTemplateSlider);
  }
  upcomingListRef2.innerHTML = cardsSkeletonSlider.join('');
  return;
}