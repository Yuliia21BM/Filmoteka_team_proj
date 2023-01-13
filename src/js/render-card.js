const mainContainerEl = document.querySelector('.main-section__allcards');

export function renderFilmCards(elem) {
  const allCards = elem
    .map(film => {
      return createElementsMovie(film);
    })
    .join('');

  mainContainerEl.innerHTML = '';
  mainContainerEl.insertAdjacentHTML('beforeend', allCards);
}

function createElementsMovie(data) {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return `
  <div class="main-section__card" data-film-id="${data.id}">
        <img src="${
          data.poster_path
            ? POSTER_URL + data.poster_path
            : '../images/default-poster.jpg'
        }" alt="${
    data.title ? data.title : 'Unknown'
  }" class="main-section__image" loading="lazy">
    
					<h2 class="main-section__card-title">${data.title ? data.title : 'Unknown'}</h2>
                    <div class="main-section__cards">
					<p class="main-section__description">${
            data.genres ? getGanre(data.genres) : 'Unknown'
          } | ${data.release_date ? data.release_date.slice(0, 5) : 'n/a'}</p>
				
                <span class="main-section__card-rating">${
                  data.vote_average ? data.vote_average.toFixed(1) : '0'
                }</span>
                </div>
                
    </div>`;
}

export function getGanre(arr) {
  const genre = arr
    .map(gener => gener.name)
    .join(', ')
    .split(',');
  if (genre.length > 3) {
    return `${String(genre.slice(1))}, Other`;
  } else {
    return genre;
  }
}
