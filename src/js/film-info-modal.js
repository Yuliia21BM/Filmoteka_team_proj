import { searchMovieById } from './fetchApi';
import { buildTrailerBtns } from './trailer-modal';
import { addWatch, addQueue } from './localstorage-save-films-API';
import { iconCross, defaultPoster } from './create-images-for-js-input';
import { QUEUE_LIST, WATCHED_LIST } from './config';

const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');

filmCardSection.addEventListener('click', e => {
  openModal(e, 'main-section__card');
});

async function checkIdFbyKey(key) {
  const keyList = await JSON.parse(localStorage.getItem(key));
  const res = !keyList || keyList == [] ? false : true;
  console.log(res);
  if (res) {
    return keyList;
  } else {
    return false;
  }
}

export function openModal(e, childClass) {
  if (!e.target.parentNode.classList.contains(childClass)) {
    return;
  }

  const filmId = e.target.parentNode.dataset.filmId;

  searchMovieById(filmId).then(
    ({
      poster_path,
      title,
      genres,
      vote_count,
      vote_average,
      popularity,
      original_title,
      overview,
    }) => {
      const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

      const getGener = genres
        ? genres.map(gener => gener.name).join(', ')
        : 'Unknown';

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
                <div class="film-modal__poster-wrapper"><img class="film-modal__poster" src="${
                  poster_path ? POSTER_URL + poster_path : ''
                }" alt="Movie ${
          title ? title : 'Unknown title'
        } poster" /></div>
                <div class="film-modal__wrapper">
                  <div class="film-modal__info-wrapper">
                    <h2 class="film-modal__title">${
                      title ? title : 'Unknown title'
                    }</h2>
                    <ul class="film-modal__info-list">
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Vote/Votes</h3>
                            <p class="film-modal__info-text"><span class="film-modal__info-text--vote">${
                              vote_average ? vote_average.toFixed(1) : '--'
                            }</span>  <span class="film-modal__info-text--slash">/</span> <span class="film-modal__info-text--vote film-modal__info-text--vote-count">${
          vote_count ? vote_count : '--'
        }</p></span>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Popularity</h3>
                            <p class="film-modal__info-text">${
                              popularity ? popularity.toFixed(1) : '--'
                            }</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Original Title</h3>
                            <p class="film-modal__info-text">${
                              original_title ? original_title : 'Unknown'
                            }</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Genre</h3>
                            <p class="film-modal__info-text">${getGener}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Trailer</h3>

                            <p id="trailerBtns-wrapper" class="film-modal__info-text"><button class="film-modal__trailer-btn" type="button" data-id="${filmId}">Watch trailer<span class="triangle-right"></span></button></p>

                        </li>
                    </ul>
                    <h3 class="film-modal__title-about">About</h3>
                    <p class="film-modal__text-about">${
                      overview ? overview : 'No description'
                    }</p>
                    </div>  
                <div class="film-modal__add-btns-wrapper">
                  <button class="film-modal__add-btns btn-add-watched hover-modal-btn trailer-btn" type="button" data-id="${filmId}">Add to Watched</button>
                  <button class="film-modal__add-btns btn-add-queue film-modal__add-btns--seconadry-btn hover-modal-btn" type="button" data-id="${filmId}">Add to queue</button>
                </div>
                </div>
        </div>`,
        basicLightboxOptions
      );

      createFilmModalMarkup.show();

      buildTrailerBtns(filmId, createFilmModalMarkup);

      if (!poster_path) {
        document.querySelector('.film-modal__poster').remove();
        document
          .querySelector('.film-modal__poster-wrapper')
          .appendChild(defaultPoster)
          .classList.add('film-modal__poster');
      }

      if (createFilmModalMarkup.visible()) {
        const watchBtn = document.querySelector('button.btn-add-watched');
        const queueBtn = document.querySelector('button.btn-add-queue');
        watchBtn.addEventListener('click', addWatch);
        queueBtn.addEventListener('click', addQueue);

        checkIdFbyKey(WATCHED_LIST).then(watched => {
          console.log(watched, 'watched');
          // if (!watched || watched === []) return;
          watched.forEach(item => {
            item.id !== filmId
              ? (watchBtn.textContent = 'ADD TO WATCHED')
              : (watchBtn.textContent = 'REMOVE FROM WATCHED');
          });
        });
        checkIdFbyKey(QUEUE_LIST).then(queue => {
          console.log(queue, 'queue');
          if (!queue || queue === []) return;
          queue.forEach(item => {
            item.id !== filmId
              ? (watchBtn.textContent = 'ADD TO QUEUE')
              : (watchBtn.textContent = 'REMOVE FROM QUEUE');
          });
        });
      }

      const closeBtn = document.querySelector('.film-modal__close-btn');
      closeBtn.appendChild(iconCross);
      closeBtn.addEventListener('click', () => createFilmModalMarkup.close());
    }
  );
}
