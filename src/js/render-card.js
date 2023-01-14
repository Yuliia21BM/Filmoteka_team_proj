
import { searchGenres } from './fetchApi';
import { refs } from './refs';


export async function renderFilmCards(elem) {
  const allCards = elem
    .map(film => {
      return createElementsMovie(film);
    })
    .join('');

  refs.mainContainerEl.innerHTML = '';
  refs.mainContainerEl.insertAdjacentHTML('beforeend', allCards);
}

function createElementsMovie(data) {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  let genreFilm = '';
  let img = document.createElement('img');
 
  img.src = new URL('../images/default-poster.jpg', import.meta.url)

  if (data.genre_ids.length <= 2) {
    genreFilm = data.genre_ids.map(genre => allGenres.get(genre)).join(', ');
  } else {
    genreFilm =
      allGenres.get(data.genre_ids[0]) +
      ', ' +
      allGenres.get(data.genre_ids[1]) +
      ', Other';
  }
  return `
  <div class="main-section__card" data-film-id="${data.id}">
        <img src="${
          data.poster_path
            ? POSTER_URL + data.poster_path
            : img.src 
        }" alt="${
    data.title ? data.title : 'Unknown'
  }" class="main-section__image" loading="lazy">
    <div>
					<h2 class="main-section__card-title">${data.title ? data.title : 'Unknown'}</h2>
                    <div class="main-section__cards">
					<p class="main-section__description">${
            data.genre_ids ? genreFilm : 'Unknown'
          } | ${data.release_date ? data.release_date.slice(0, 4) : 'n/a'}</p>
				
                <span class="main-section__card-rating">${
                  data.vote_average ? data.vote_average.toFixed(1) : '0'
                }</span></div>
                </div>
                
    </div>`;
}

const allGenres = new Map();

searchGenres().then(res => {
  console.log(res);
  return res.genres.map(({ id, name }) => {
    allGenres.set(id, name);
  });
});
