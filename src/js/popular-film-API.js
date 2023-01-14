import { getPopularFilm } from '../js/fetchApi';
import * as pagination  from './pagination';

import { renderFilmCards } from './render-card';

let currentPage = 1;

getPopularFilm(currentPage).then(
  ({ page, results, total_pages, total_results }) => {
    renderFilmCards(results);
  }
}

getGenreFilm().then(res => {
   return res.genres.map(({ id, name }) => { allGenres.set(id,name); });
 });
  



function createElementsMovies(movies) {
    //console.log(movies);
      return movies.map(({adult, backdrop_path, genre_ids, id, original_title,popularity,poster_path,release_date
          , title, video, vote_average, vote_count }) => {
        const releaseDate = new Date(release_date).getFullYear();
        let genreFilm='n/a';
        let posterFilm='../images/default-poster.jpg';
        if (poster_path.length>0) {
          posterFilm=`${BASE_URL_POSTER}`+`${poster_path}`;
        }
        if (genre_ids.length <= 2) {
          genreFilm = genre_ids.map(genre => allGenres.get(genre)).join(', ');
        } else {
          genreFilm =  allGenres.get(genre_ids[0])+', '+allGenres.get(genre_ids[1])+', Other';
        }
            return `<div class="main-section__card">
        <img src="${posterFilm}" alt="${title}" class="main-section__image" loading="lazy">
    
					<h2 class="main-section__card-title">${title}</h2>
                    <div class="main-section__cards">
					<p class="main-section__description">${genreFilm} | ${releaseDate}</p>
				
                <span class="main-section__card-rating">${Number(vote_average).toFixed(1)}</span>
                </div>
                
    </div>`;
           }).join("");

    
  
}




const _getPopularFilm = () => {
 getPopularFilm(pagination.getCurrentPage()).then(({ page, results, total_pages, total_results }) => {
    const elementsMovie = createElementsMovies(results);   
  
    mainContainerEl.innerHTML = elementsMovie;
   
})
; }

_getPopularFilm()

pagination.subscribeOnPageChange( _getPopularFilm );
);
