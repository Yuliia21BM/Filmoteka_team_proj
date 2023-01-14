import { searchTrailerById } from './fetchApi';
import * as basicLightbox from 'basiclightbox';
const cardsRef = document.querySelector(`.main-section__allcards`);

// trailerBtn.addEventListener('click', searchTrailerById);

// cardsRef.addEventListener('click', onClick);

// async function onClick(event) {
//   if (event.target.dataset.movieid) {
//     const movieId = event.target.dataset.movieid;
//     console.log(movieId);

//     buildTrailerBtns(movieId);
//   }
// }
export function showTrailerModal(trailerId, filmModal) {
  filmModal.close();
  const trailerModel = basicLightbox.create(`
  <div id="trailer-modal" data-modal>
  <button type="button" class="modal__close" data-modal-close>
    <svg class="modal__icon" width="18" height="18">
      <use href="./images/logo.svg#icon-close-black-18dp-2-1"></use>
    </svg>
  </button>
  <iframe
    id="trailer-iframe"
    width="560"
    height="315"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>  
</div>`);

  trailerModel.show();

  const trailerIframe = document.querySelector('#trailer-iframe');
  trailerIframe.src = `https://www.youtube.com/embed/${trailerId}`;
}

export async function buildTrailerBtns(movieId, createFilmModalMarkup) {
  const trailers = await searchTrailerById(movieId);

  console.log(trailers);
  const container = document.querySelector(`#trailerBtns-wrapper`);

  console.log(container, movieId);

  if (trailers.results.length === 0) {
    container.innerHTML = 'No trailers are found';
    return;
  }
  const trailerButtons = trailers.results.map((item, key) => {
    const button = document.createElement('button');
    button.innerText = `trailer ${key + 1}`;
    button.classList.add('film-modal__trailer-btn');
    button.addEventListener('click', () =>
      showTrailerModal(item.key, createFilmModalMarkup)
    );

    return button;
  });

  container.innerHTML = '';

  container.append(...trailerButtons);
}
