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
          src="${
            film.poster_path
              ? POSTER_URL + film.poster_path
              : '../images/default-poster.jpg'
          }"
          alt="${film.title ? film.title : 'Not known'}"
          class="upcoming-img"
          loading="lazy"
        />
        <p class="upcoming-card-title">Release date <br/>
${film.release_date ? film.release_date : 'Not known'}</p>
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