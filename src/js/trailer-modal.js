import { searchTrailerById } from './fetchApi';
import * as basicLightbox from 'basiclightbox';
const cardsRef = document.querySelector(`.main-section__allcards`);
import svgCloseIcon from '../images/svg/close-modal-film-icon.svg';
export function showTrailerModal(trailerId, filmModal) {
  filmModal.close();
  const basicLightboxOptions = {
    onShow: () => {
      document.addEventListener('keydown', escClose);
    },

    onClose: () => {
      document.removeEventListener('keydown', escClose);
    },
  };

  const trailerModal = basicLightbox.create(
    `
  <div id="trailer-modal" data-modal>
  <button class="film-modal__close-btn" type="button" trailer-modal-close>
   <img class="cross-button__icon" src="${svgCloseIcon}" />
  </button>
  <iframe
    id="trailer-iframe"
   
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe> 
</div>`,
    basicLightboxOptions
  );

  trailerModal.show();

  const trailerIframe = document.querySelector('#trailer-iframe');
  trailerIframe.src = `https://www.youtube.com/embed/${trailerId}`;
  const closeModalBtn = document.querySelector('[trailer-modal-close]');

  function escClose(e) {
    if (e.key === 'Escape') {
      trailerModal.close();
      filmModal.show();
    }
  }

  closeModalBtn.addEventListener('click', () => {
    trailerModal.close();
    filmModal.show();
  });
}

export async function buildTrailerBtns(filmId, filmModal) {
  const trailers = await searchTrailerById(filmId);

  // console.log(trailers);
  const container = document.querySelector(`#trailerBtns-wrapper`);

  // console.log(container, filmId);

  if (trailers.results.length === 0) {
    container.innerHTML = 'No trailers are found';
    return;
  }
  const trailerButtons = trailers.results.slice(0, 1).map((item, key) => {
    const button = document.createElement('button');
    button.innerHTML = `Watch trailer<span class="triangle-right"></span>`;
    button.classList.add('film-modal__trailer-btn');
    button.addEventListener('click', () =>
      showTrailerModal(item.key, filmModal)
    );

    return button;
  });

  container.innerHTML = '';

  container.append(...trailerButtons);
}
