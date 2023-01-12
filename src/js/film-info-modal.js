import { searchMovieById } from './fetchApi';
import { buildTrailerBtns } from './trailer-modal';

const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');

filmCardSection.addEventListener('click', e => {
  if (e.target.parentNode.className !== 'main-section__card') {
    return;
  }

  const movieId = 550;

  searchMovieById(movieId).then(movieInfo => {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const getGener = movieInfo.genres.map(gener => gener.name).join(', ');

    const createFilmModalMarkup = basicLightbox.create(`
        <div class="film-modal">
            <div class="film-modal__wrapper">
                <img class="film-modal__poster" src="${
                  POSTER_URL + movieInfo.poster_path
                }" alt="Movie ${movieInfo.title} poster" />
               <div id="trailerBtns-wrapper"></div>
                <div>
                    <h2 class="film-modal__title">${movieInfo.title}</h2>
                    <ul class="film-modal__info-list">
                    <li class="film-modal__info-item">
                        <h3 class="film-modal__info-title">Vote / Votes</h3>
                        <p class="film-modal__info-text">${
                          movieInfo.vote_average
                        }/${movieInfo.vote_count}</p>
                    </li>
                    <li class="film-modal__info-item">
                        <h3 class="film-modal__info-title">Popularity</h3>
                        <p class="film-modal__info-text">${
                          movieInfo.popularity
                        }</p>
                    </li>
                    <li class="film-modal__info-item">
                        <h3 class="film-modal__info-title">Original Title</h3>
                        <p class="film-modal__info-text">${
                          movieInfo.original_title
                        }</p>
                    </li>
                    <li class="film-modal__info-item">
                        <h3 class="film-modal__info-title">Genre</h3>
                        <p class="film-modal__info-text">${getGener}</p>
                    </li>
                    <li>
                        <h3 class="film-modal__info-item--about">About</h3>
                        <p class="film-modal__info-text--about">${
                          movieInfo.overview
                        }</p>
                    </li>
                    </ul>
                    
                </div>
            </div>
        </div>`);

    createFilmModalMarkup.show();

    buildTrailerBtns(movieId, createFilmModalMarkup);
  });
});
