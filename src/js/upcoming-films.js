import { searchUpcomimgFilms } from './fetchApi';
import { openModal } from './film-info-modal';

const upcomingListRef = document.querySelector('.swiper-wrapper');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1500,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

async function getUpcomingFilms() {
  try {
    const { results } = await searchUpcomimgFilms();
    if (!results || results === []) return;

    // const markup = `
    // <li class="upcoming-card swiper-slide">
    //     <img
    //       src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    //       alt="Avatar: The Way of Water"
    //       class="upcoming-img"
    //       loading="lazy"
    //     />
    //     <p class="upcoming-card-title">Avatar. The Way of Water 1</p>
    //   </li>
    // `;
  } catch (err) {
    console.log(err);
  }
}
getUpcomingFilms();

upcomingListRef.addEventListener('click', e => {
  openModal(e, 'upcoming-card');
});
