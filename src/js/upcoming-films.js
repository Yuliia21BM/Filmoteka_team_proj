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
    delay: 3000,
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
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  try {
    const { results } = await searchUpcomimgFilms();
    if (!results || results === []) return;

    const markup = results
      .map(film => {
        return `
      <li class="upcoming-card swiper-slide">
        <img
          src="${POSTER_URL + film.poster_path}"
          alt="${film.title}"
          class="upcoming-img"
          loading="lazy"
        />
        <p class="upcoming-card-title">${film.title}</p>
      </li>`;
      })
      .join('');

    upcomingListRef.innerHTML = '';
    upcomingListRef.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }
}
getUpcomingFilms();

upcomingListRef.addEventListener('click', e => {
  openModal(e, 'upcoming-card');
});
