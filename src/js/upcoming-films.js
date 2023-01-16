import { searchUpcomimgFilms } from './fetchApi';
import { openModal } from './film-info-modal';

const upcomingListRef = document.querySelector('.swiper-wrapper');


async function getUpcomingFilms() {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  try {
    const { results } = await searchUpcomimgFilms();
    if (!results || results === []) return;

    const markup = results
      .map(film => {
        return `
      <li class="upcoming-card swiper-slide" data-film-id="${film.id}">
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

    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 'auto',
  loopedSlides: results.length,
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
    disableOnInteraction: false,
  },
});

  } catch (err) {
    console.log(err);
  }
}
getUpcomingFilms();

upcomingListRef.addEventListener('click', e => {
  openModal(e, 'upcoming-card');
});
