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
      console.log('selectedGenre' + selectedGenre);
      
      
      getMovies(API_URL + '&with_genres=' + selectedGenre, pagination.getCurrentPage());
      
      selectedGenre = [];
    });
    tagsEl.append(filmCard);
  });
}

getMovies(API_URL);



function getMovies(url, page) {
  url = url + '&page=' + page;
  console.log("ссылка", url)
  console.log("страница", page)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
       console.log(data.page);
      if (data.results.length !== 0) {
        renderFilmCards(data.results);
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
  tagsEl.classList.toggle('is-active');
};




















// ---------------------------- second code -------------------------------------------

// const familyBtn = document.querySelector('#family');
// const musicBtn = document.querySelector('#music');
// const mysteryBtn = document.querySelector('#mystery');
// const dramaBtn = document.querySelector('#drama');
// const warBtn = document.querySelector('#war');
// const scienceFictionBtn = document.querySelector('#scienceFiction');
// const thrillerBtn = document.querySelector('#thriller');

// familyBtn.addEventListener('click', getFamily);
// musicBtn.addEventListener('click', getMusic);
// mysteryBtn.addEventListener('click', getMystery);
// dramaBtn.addEventListener('click', getDrama);
// warBtn.addEventListener('click', getWar);
// scienceFictionBtn.addEventListener('click', getScienceFiction);
// thrillerBtn.addEventListener('click', getThriller);

// function getFamily(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getMusic(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getMystery(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getDrama(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getWar(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10752`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getScienceFiction(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getThriller(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// function getMystery(API_URL) {
//     API_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`
//     fetch(API_URL).then(res => res.json()).then(data => {
//         console.log(data.results);
//         renderFilmCards(data.results);
// })
// }

// ---------------------- first code -------------------------

// familyBtn.addEventListener('click', getMovies);

// // function rengerGanre(id) {

// // }

// // function getMovies() {
// //     const urlAPI = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
// //     axios.get(urlAPI)
// //         .then(res => console.log(res.data.total_results))
// //         .then(({ results }) => renderFilms(results))
// //     .catch(error => console.log(error))
// // }

// function getMovies(page) {
//     // page = 1
//     for (let page = 1; page < 5; page++) {
//        const urlAPI = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     console.log(urlAPI);
//     axios.get(urlAPI)
//         .then(res => {
//             page += 1;

//             return res.data
//         })
//         .then(({ results }) => renderFilms(results))

//         // .then(({ results }) => renderFilms(results))
//     .catch(error => console.log(error))
//     }

// }

// function renderFilms(results) {
//     renderFilmsArea.innerHTML = '';

//     const movieElements = results.map(({ poster_path, title, genre_ids }) => {
//         if(genre_ids.includes(16))
//         return `<div class="main-section__card">
//         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}" width="500" height="600" alt="${title}"  loading="lazy">
//     <p class="main-section__name">
// 					<h2 class="main-section__card-title">${title}</h2>
// 					<p class="main-section__description">Drama, Action | 2022</p>
// 				</p>
//     </div>`
//     }).join('');
//         renderFilmsArea.insertAdjacentHTML('beforeend', movieElements)

// }
