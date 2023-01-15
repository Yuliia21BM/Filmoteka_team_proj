import { QUEUE_LIST } from './config';
import { refs } from './refs';
import {
  createElementsMovie,
  renderNoMoviesMarkup,
  clearMarkup,
} from './render-card';
import { loadFromStorage } from './localstorage-load-films';

// -------------👇Це mockup data, поки немає функціоналу додавання в localStorage ------------
const movie = [
  {
    id: 1,
    title: 'Test Movie1',
    genre: 'Drama, Family, Thriller',
    poster:
      'https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-60938694502129.webp',
    rating: 6.2,
    date: 2011,
  },
  {
    id: 2,
    title: 'Test Movie2',
    genre: 'Comedy, Family, Romance',
    poster:
      'https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-32211140489658.webp',
    rating: 7.8,
    date: 2008,
  },
];

localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// -------------☝Це mockup data, поки немає функціоналу додавання в localStorage -------------
/**TEST */
// clearMarkup(refs.mainContainerEl);
// renderNoMoviesMarkup();
/**TEST */

// STARTS HERE <================================================================<<<<

const movieList = loadFromStorage(QUEUE_LIST);

// clearMarkup(refs.mainContainerEl);

// queueList.map(movie => {
//   const { title, genre, poster, rating, date } =
//     movie;

//   refs.mainContainerEl.insertAdjacentHTML(
//     'beforeend',
//     `    <div class="main-section__card">
//         <img src="${poster}" alt="${title}" class="main-section__image" loading="lazy">

// 					<h2 class="main-section__card-title">${title}</h2>
//                     <div class="main-section__cards">
// 					<p class="main-section__description">${movieGenres} | ${date}</p>
//                 <span class="main-section__card-rating">${rating}</span>
//                 </div>

//     </div>`
//   );
// });
