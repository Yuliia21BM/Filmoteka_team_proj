import axios from 'axios';
import { API_KEY, BASE_URL} from '../js/config'

import { getPopularFilm } from '../js/fetchApi';

let currentPage = 1;
const mainContainerEl = document.querySelector('.main-section__allcards');
const logoEl = document.querySelector('.link');
const allGenres = new Map();
const BASE_URL_POSTER='https://image.tmdb.org/t/p/w500/';

async function getGenreFilm() {
  try {
    const fetchAPI = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await fetchAPI.data;
    
    return fetchAPI.data;
  } catch (error) {
    console.error('Something is wrong with the search' + error);
  }
}

getGenreFilm().then(res => {
   return res.genres.map(({ id, name }) => { allGenres.set(id,name); });
 });
  

getPopularFilm(currentPage).then(({ page, results, total_pages, total_results }) => {
    const elementsMovie = createElementsMovies(results);   
  
    mainContainerEl.innerHTML = elementsMovie;
   
})

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
            return `<div class="main-section__card" data-film-id="${id}">
        <img src="${posterFilm}" alt="${title}" class="main-section__image" loading="lazy">
    
					<h2 class="main-section__card-title">${title}</h2>
                    <div class="main-section__cards">
					<p class="main-section__description">${genreFilm} | ${releaseDate}</p>
				
                <span class="main-section__card-rating">${Number(vote_average).toFixed(1)}</span>
                </div>
                
    </div>`;
           }).join("");

    
  
}