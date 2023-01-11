import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';

import throttle from 'lodash.throttle';

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
//   const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();

const btnToTop = document.querySelector('.btnToTop');
window.addEventListener('scroll', throttle(onScroll, 200));

function onScroll() {
  const minimumPxToScroll = 100;
  if (window.scrollY > minimumPxToScroll) {
    btnToTop.classList.add(`transitionBtn`);
    btnToTop.classList.remove(`is-hidden-btnToTop`);
  }
  if (window.scrollY < minimumPxToScroll) {
    btnToTop.classList.add(`is-hidden-btnToTop`);
  }
}

export function toTop() {
  window.scrollTo(0, 0);
}

btnToTop.addEventListener('click', toTop); 