import { searchTrailerById } from './fetchApi';

const cardsRef = document.querySelector(`.main-section__allcards`);

// trailerBtn.addEventListener('click', searchTrailerById);

cardsRef.addEventListener('click', onClick);

async function onClick(event) {
  if (event.target.dataset.movieid) {
    const movieId = event.target.dataset.movieid;
    console.log(movieId);

    buildTrailerBtns(movieId);
  }
}
function showTrailerModal(trailerId) {
  const trailerModalContainer = document.querySelector('#trailer-modal');

  const trailerIframe = document.querySelector('#trailer-iframe');
  trailerIframe.src = `https://www.youtube.com/embed/${trailerId}`;

  trailerModalContainer.classList.remove('visually-hidden');
  console.log(trailerId, trailerModalContainer);
}

async function buildTrailerBtns(movieId) {
  const trailers = await searchTrailerById(movieId);

  console.log(trailers);
  const container = document.querySelector(`#trailers-${movieId}`);
  if (trailers.results.length === 0) {
    container.innerHTML = 'No trailers are found';
    return;
  }
  const trailerButtons = trailers.results.map((item, key) => {
    const button = document.createElement('button');
    button.innerText = `trailer ${key + 1}`;
    button.addEventListener('click', () => showTrailerModal(item.key));

    return button;
  });

  container.innerHTML = '';

  container.append(...trailerButtons);
}
