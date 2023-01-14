import { searchMovieById } from './fetchApi';
import { addWatch, addQueue } from './localstorage-save-films-API';
import { iconCross, defaultPoster } from './create-images-for-js-input';

const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');


filmCardSection.addEventListener('click', e => {
  openModal(e, 'main-section__card');
});

export function openModal(e, childClass) {
  if (!e.target.parentNode.classList.contains(childClass)) {
    return;
  }

  const filmId = e.target.parentNode.dataset.filmId;


  searchMovieById(filmId).then (({poster_path, title, genres, vote_count, vote_average, popularity, original_title, overview}) => {
    
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

    const getGener = genres.map(gener => gener.name).join(', ');

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
                <div class="film-modal__poster-wrapper"><img class="film-modal__poster" src="${poster_path ? POSTER_URL + poster_path : ''}" alt="Movie ${title} poster" /></div>
                <div class="film-modal__wrapper">
                  <div class="film-modal__info-wrapper">
                    <h2 class="film-modal__title">${title}</h2>
                    <ul class="film-modal__info-list">
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Vote/Votes</h3>
                            <p class="film-modal__info-text"><span class="film-modal__info-text--vote">${vote_average.toFixed(
                              1
                            )}</span>  <span class="film-modal__info-text--slash">/</span> <span class="film-modal__info-text--vote film-modal__info-text--vote-count">${vote_count}</p></span>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Popularity</h3>
                            <p class="film-modal__info-text">${popularity}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Original Title</h3>
                            <p class="film-modal__info-text">${original_title}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Genre</h3>
                            <p class="film-modal__info-text">${getGener}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Trailer</h3>
                            <p class="film-modal__info-text"><button class="film-modal__trailer-btn" type="button" data-id="${
                              filmId
                            }">Watch trailer<span class="triangle-right"></span></button></p>
                        </li>
                    </ul>
                    <h3 class="film-modal__title-about">About</h3>
                    <p class="film-modal__text-about">${overview}</p>
                    </div>  
                <div class="film-modal__add-btns-wrapper">
                  <button class="film-modal__add-btns btn-add-watched hover-modal-btn trailer-btn" type="button" data-id="${
                    filmId
                  }">Add to Watched</button>
                  <button class="film-modal__add-btns btn-add-queue film-modal__add-btns--seconadry-btn hover-modal-btn" type="button" data-id="${
                    filmId
                  }">Add to queue</button>
                </div>
                </div>
        </div>`,
      basicLightboxOptions
    );

    createFilmModalMarkup.show();

    if (!poster_path) {
      document.querySelector('.film-modal__poster').remove();
      document.querySelector('.film-modal__poster-wrapper').appendChild(defaultPoster).classList.add('film-modal__poster');
    }




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
