import { searchGenres } from './fetchApi';
import { refs } from './refs';

export const clearMarkup = el => {
  el.innerHTML = '';
};

export async function renderFilmCards(elem) {
  const allCards = elem
    .map(film => {
      return createElementsMovie(film);
    })
    .join('');

  clearMarkup(refs.mainContainerEl);

  refs.mainContainerEl.insertAdjacentHTML('beforeend', allCards);
}

export function createElementsMovie(data) {
  const { poster_path, id, title, genre_ids, release_date, vote_average } =
    data;

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  let genreFilm = '';
  let img = document.createElement('img');

  img.src = new URL('../images/default-poster.jpg', import.meta.url);

  const markupFromAPI = () => `
  <div class="main-section__card" data-film-id="${id}">
        <img src="${poster_path ? POSTER_URL + poster_path : img.src}" alt="${
    title ? title : 'Unknown'
  }" class="main-section__image" loading="lazy">
    <div>
					<h2 class="main-section__card-title">${title ? title : 'Unknown title'}</h2>
          <div class="main-section__cards">
					<p class="main-section__description">${genre_ids ? genreFilm : 'Unknown'} | ${
    release_date ? release_date.slice(0, 4) : 'n/a'
  }</p>
                <span class="main-section__card-rating">${
                  vote_average ? vote_average.toFixed(1) : '0'
                }</span></div>
                </div>
    </div>`;

  const markupFromStorage = () => `
  <div class="main-section__card" data-film-id="${id}">
        <img src="${poster_path ? POSTER_URL + poster_path : img.src}" alt="${
    title ? title : 'Unknown'
  }" class="main-section__image" loading="lazy">
    <div>
					<h2 class="main-section__card-title">${title ? title : 'Unknown title'}</h2>
                    <div class="main-section__cards">
					<p class="main-section__description">${genre_ids ? genreFilm : data.genres} | ${
    release_date ? release_date.slice(0, 4) : 'n/a'
  }</p>
                <span class="main-section__card-rating">${
                  vote_average ? vote_average.toFixed(1) : '0'
                }</span></div>
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

  refs.mainContainerEl.innerHTML = `<div class="no-movies-wrap">
                ${notFoundGIF.outerHTML}
                <p>No movies here yet</p>
            </div>`;
};
