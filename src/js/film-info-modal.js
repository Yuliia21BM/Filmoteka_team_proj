import { searchMovieById } from './fetchApi';
import { addWatch, addQueue } from './localstorage-save-films-API';

const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');

let iconCross = document.createElement('img');
iconCross.src = new URL(
  '/src/images/svg/close-modal-film-icon.svg',
  import.meta.url
);

filmCardSection.addEventListener('click', e => {
  openModal(e, 'main-section__card');
});

export function openModal(e, childClass) {
  if (!e.target.parentNode.classList.contains(childClass)) {
    return;
  }

  const filmId = e.target.parentNode.dataset.filmId;

  searchMovieById(filmId).then(movieInfo => {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

    const getGener = movieInfo.genres.map(gener => gener.name).join(', ');

    const basicLightboxOptions = {
      onShow: () => {
        document.body.classList.add('hide-scroll');
      },

      onClose: () => {
        document.body.classList.remove('hide-scroll');
        closeBtn.removeEventListener('click', () => {
          watchBtn.removeEventListener('click', addWatch);
          queueBtn.removeEventListener('click', addQueue);
          createFilmModalMarkup.close();
        });
      },
    };

    const createFilmModalMarkup = basicLightbox.create(
      `
        <div class="film-modal">
            <button class="film-modal__close-btn" type="button"></button>
                <img class="film-modal__poster" src="${
                  POSTER_URL + movieInfo.poster_path
                }" alt="Movie ${movieInfo.title} poster" />
                <div class="film-modal__wrapper">
                  <div class="film-modal__info-wrapper">
                    <h2 class="film-modal__title">${movieInfo.title}</h2>
                    <ul class="film-modal__info-list">
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Vote/Votes</h3>
                            <p class="film-modal__info-text"><span class="film-modal__info-text--vote">${movieInfo.vote_average.toFixed(
                              1
                            )}</span>  <span class="film-modal__info-text--slash">/</span> <span class="film-modal__info-text--vote film-modal__info-text--vote-count">${
        movieInfo.vote_count
      }</p></span>
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
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Trailer</h3>
                            <p class="film-modal__info-text"><button class="film-modal__trailer-btn" type="button" data-id="${
                              movieInfo.id
                            }">Watch trailer<span class="triangle-right"></span></button></p>
                        </li>
                    </ul>
                    <h3 class="film-modal__title-about">About</h3>
                    <p class="film-modal__text-about">${movieInfo.overview}</p>
                    </div>  
                <div class="film-modal__add-btns-wrapper">
                  <button class="film-modal__add-btns btn-add-watched accent-btn trailer-btn" type="button" data-id="${
                    movieInfo.id
                  }">Add to Watched</button>
                  <button class="film-modal__add-btns btn-add-queue film-modal__add-btns--seconadry-btn second-btn" type="button" data-id="${
                    movieInfo.id
                  }">Add to queue</button>
                </div>
                </div>
        </div>`,
      basicLightboxOptions
    );

    createFilmModalMarkup.show();

    if (createFilmModalMarkup.visible()) {
      const watchBtn = document.querySelector('button.btn-add-watched');
      const queueBtn = document.querySelector('button.btn-add-queue');
      watchBtn.addEventListener('click', addWatch);
      queueBtn.addEventListener('click', addQueue);
    }

    const closeBtn = document.querySelector('.film-modal__close-btn');
    closeBtn.appendChild(iconCross);
    closeBtn.addEventListener('click', () => createFilmModalMarkup.close());
  });
}
