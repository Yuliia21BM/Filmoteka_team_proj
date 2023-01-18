import { searchMovieById } from './fetchApi';
import { buildTrailerBtns } from './trailer-modal';
import { addWatch, addQueue } from './localstorage-save-films-API';
import { iconCross, defaultPoster } from './create-images-for-js-input';
import { QUEUE_LIST, WATCHED_LIST } from './config';
import Spinner from './spinner';
import { loadFromStorage } from './localstorage-load-films';
import { IS_LOGED } from './config';

const spinner = new Spinner();
const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');

filmCardSection.addEventListener('click', e => {
  openModal(e, 'main-section__card');
});

const checkPathname = async (pathname, activetab) => {
  if (
    pathname === '/Filmoteka_team_proj/library.html' &&
    activetab === 'Queue'
  ) {
    console.log(
      "it's pathname check on queue & active tab:",
      pathname,
      activetab
    );

    await loadFromStorage(QUEUE_LIST);
    return;
  }

  if (
    pathname === '/Filmoteka_team_proj/library.html' &&
    activetab === 'Watched'
  ) {
    console.log(
      "it's pathname check on watched & active tab:",
      pathname,
      activetab
    );

    await loadFromStorage(WATCHED_LIST);
  }
};

const refreshLibraryList = async () => {
  try {
    const pathname = window.location.pathname;
    console.log('this is pathname in refreshLibList:', pathname);

    const parsedActiveTab = await JSON.parse(
      localStorage.getItem('active-tab')
    );
    console.log('this is parsedActiveTab in refreshLibList:', parsedActiveTab);

    checkPathname(pathname, parsedActiveTab);
  } catch (error) {
    console.log(error.message);
  }
};

async function checkIdFbyKey(key) {
  const keyList = await JSON.parse(localStorage.getItem(key));
  const res = !keyList || keyList == [] ? false : true;
  console.log(res);
  if (res) {
    console.log(keyList);
    return keyList;
  } else {
    return false;
  }
}

export function openModal(e, childClass) {
  const isLogged = JSON.parse(localStorage.getItem(IS_LOGED)) || false;

  if (!e.target.parentNode.classList.contains(childClass)) {
    return;
  }

  spinner.enable();

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
          document.addEventListener('keydown', escClose);
        },

        onClose: () => {
          document.body.classList.remove('hide-scroll');
          closeBtn.removeEventListener('click', () => {
            watchBtn.removeEventListener('click', addWatch);
            queueBtn.removeEventListener('click', addQueue);
            document.removeEventListener('keydown', escClose);
            createFilmModalMarkup.close();
          });
          refreshLibraryList();
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
                  <button ${
                    isLogged ? '' : 'disabled'
                  } class="film-modal__add-btns btn-add-watched hover-modal-btn trailer-btn" type="button" data-id="${filmId}">Add to Watched</button>
                  <button ${
                    isLogged ? '' : 'disabled'
                  } class="film-modal__add-btns btn-add-queue film-modal__add-btns--seconadry-btn hover-modal-btn" type="button" data-id="${filmId}">Add to queue</button>
                </div>
                ${
                  isLogged
                    ? ''
                    : '<p class="disabled-text">You should be registered to add this movie to your library :)</p>'
                }
                </div>
        </div>`,
        basicLightboxOptions
      );

      createFilmModalMarkup.show();
      spinner.disable();
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
          if (!watched || watched === []) return;
          watched.forEach(item => {
            item.id !== +filmId ? addW() : removeW();
          });
        });
        checkIdFbyKey(QUEUE_LIST).then(queue => {
          if (!queue || queue === []) return;
          queue.map(item => {
            console.log(item.id !== filmId, 'item.id !== filmId');
            item.id !== +filmId ? addQ() : removeQ();
          });
        });
      }
      function addW() {
        // const watchBtn = document.querySelector('button.btn-add-watched');
        // watchBtn.textContent = 'ADD TO WATCHED';
        return;
      }
      function removeW() {
        const watchBtn = document.querySelector('button.btn-add-watched');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        return;
      }
      function addQ() {
        // const queueBtn = document.querySelector('button.btn-add-queue');
        // queueBtn.textContent = 'ADD TO QUEUE';
        return;
      }
      function removeQ() {
        const queueBtn = document.querySelector('button.btn-add-queue');
        queueBtn.textContent = 'REMOVE FROM QUEUE';
        return;
      }

      function escClose(e) {
        if (e.key === 'Escape' && createFilmModalMarkup.visible()) {
          createFilmModalMarkup.close();
        }
      }

      const closeBtn = document.querySelector('.film-modal__close-btn');
      closeBtn.appendChild(iconCross);
      closeBtn.addEventListener('click', () => createFilmModalMarkup.close());
    }
  );
}
