import { API_KEY } from './config';
import { BASE_URL } from './config';
import { renderFilmCards } from './render-card';
import * as pagination from './pagination';

const API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },

  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },

  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

const tagsEl = document.querySelector('.genres-list');
const mobileBtn = document.querySelector('.genres-button-mobile');

let selectedGenre = [];
setGenre();
function setGenre() {
  genres.forEach(genre => {
    const filmCard = document.createElement('button');
    filmCard.classList.add('genres-button');
    filmCard.id = genre.id;
    filmCard.innerText = genre.name;
    
    filmCard.addEventListener('click', () => {
      if (selectedGenre.length == 0) {
        selectedGenre.push(genre.id);
      }
      // console.log('selectedGenre' + selectedGenre);
      getMovies(API_URL + '&with_genres=' + genre.id, 1);
      pagination.setCurrentPageto1()
      pagination.subscribeOnPageChange(() => {
        getMovies(API_URL + '&with_genres=' + genre.id, pagination.getCurrentPage())
      } );
      selectedGenre = [];
    });
    tagsEl.append(filmCard);
  });
}

// getMovies(API_URL);

function getMovies(url, page) {
  url = url + '&page=' + page;
  // console.log("ссылка", url)
  // console.log("страница", page)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      //  console.log(data.page);
      if (data.results.length !== 0) {
        renderFilmCards(data.results);
        if (data.total_pages > 500) {
        pagination.setTotalPages(500) 
        } else {
          pagination.setTotalPages(data.total_pages)
      }
      }
    });
}

// function getMovies(url) {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.results);
//        console.log(data.page);
//       if (data.results.length !== 0) {
//         renderFilmCards(data.results);
//       }
//     });
// }

mobileBtn.addEventListener('click', openGenreList);

function openGenreList() {
 if(tagsEl.classList.toggle('is-active'))
    mobileBtn.textContent = 'HIDE GENRES';
  else(
  mobileBtn.textContent = 'SHOW GENRES');
};


