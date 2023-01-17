import { searchGenres } from './fetchApi';
import { refs } from './refs';
import { defaultPoster } from './create-images-for-js-input';
import { renderSkeleton } from './skeleton';
import { THEME } from './config';

export const milisecond = 800;

export const clearMarkup = el => {
  el.innerHTML = '';
};

export async function renderFilmCards(elem) {
  renderSkeleton();
  const allCards = elem
    .map(film => {
      return createElementsMovie(film);
    })
    .join('');

  setTimeout(() => {
    clearMarkup(refs.mainContainerEl);
    refs.mainContainerEl.insertAdjacentHTML('beforeend', allCards);
    let LS = JSON.parse(localStorage.getItem(THEME));
    let darkTheme = (LS = LS || false);
    console.log(darkTheme);
    const cartTitle = document.querySelectorAll('.main-section__card-title');
    console.log(cartTitle);
    if (darkTheme) {
      cartTitle.forEach(el => {
        el.style.color = '#fff';
      });
    } else {
      cartTitle.forEach(el => {
        el.style.color = '#000';
      });
    }
  }, milisecond);
}

export function createElementsMovie(data) {
  const { poster_path, id, title, genre_ids, release_date, vote_average } =
    data;

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  let genreFilm = '';

  const markupFromAPI = () => `
  <li class="main-section__card-conteiner">
  <div class="main-section__card main-section__popup" data-film-id="${data.id}">
        <img src="${
          data.poster_path ? POSTER_URL + data.poster_path : defaultPoster.src
        }" alt="${
    data.title ? data.title : 'Unknown'
  }" class="main-section__image" loading="lazy">
  <p class="main-section__popup-title"> <span class = "popUp-title">About</span> <br/>${
    data.overview ? data.overview : 'No description'
  }</p>
  </div>
      <div class="main-section__card main-section__cards" data-film-id="${
        data.id
      }">
					<h2 class="main-section__card-title">${
            data.title ? data.title : 'Unknown title'
          }</h2>
                   
					<p class="main-section__description">${
            data.genre_ids ? genreFilm : 'Unknown'
          } | ${data.release_date ? data.release_date.slice(0, 4) : 'n/a'}
				
                <span class="main-section__card-rating">${
                  data.vote_average ? data.vote_average.toFixed(1) : '0.0'
                }</span>
                </p>
      </div>             
    </div>`;

  const markupFromStorage = () => `
  <li class="main-section__card-conteiner">
  <div class="main-section__card main-section__popup" data-film-id="${data.id}">
        <img src="${
          data.poster_path ? POSTER_URL + data.poster_path : defaultPoster.src
        }" alt="${
    data.title ? data.title : 'Unknown'
  }" class="main-section__image" loading="lazy">
  </div>
      <div class="main-section__card main-section__cards" data-film-id="${
        data.id
      }">
					<h2 class="main-section__card-title">${
            data.title ? data.title : 'Unknown title'
          }</h2>
                   
					<p class="main-section__description">${data.genres ? genreFilm : 'Unknown'} | ${
    data.release_date ? data.release_date.slice(0, 4) : 'n/a'
  }
				
                <span class="main-section__card-rating">${
                  data.vote_average
                    ? Number(data.vote_average).toFixed(1)
                    : '0.0'
                }</span>
                </p>
      </div>             
    </div>`;

  if (!genre_ids) {
    genreFilm = data.genres;

    return markupFromStorage();
  } else if (genre_ids.length <= 3) {
    genreFilm = genre_ids.map(genre => allGenres.get(genre)).join(', ');
  } else {
    genreFilm =
      allGenres.get(genre_ids[0]) +
      ', ' +
      allGenres.get(genre_ids[1]) +
      ', Other';
  }
  return markupFromAPI();
}

const allGenres = new Map();

searchGenres().then(res => {
  return res.genres.map(({ id, name }) => {
    allGenres.set(id, name);
  });
});

export const renderNoMoviesMarkup = () => {
  const notFoundGIF = document.createElement('img');
  notFoundGIF.src = new URL('../images/not-found-gif.gif', import.meta.url);
  notFoundGIF.alt = 'Travolta from Pulp Fiction is searching for something';
  notFoundGIF.class = 'not-found';

  refs.mainContainerEl.innerHTML = `<div class="no-movies-wrap">
                ${notFoundGIF.outerHTML}
                <p>No movies here yet</p>
            </div>`;
};
