import { QUEUE_LIST } from './config';
import { refs } from './refs';
import { renderNoMoviesMarkup } from './render-card';

console.log(refs.mainContainerEl);

// 👇Це mockup data, поки немає функціоналу додавання в localStorage ==============================
const movie = [
  {
    original_title: 'Test Movie1',
    genres: [
      { id: 10, name: 'drama1' },
      { id: 11, name: 'comedy1' },
      { id: 12, name: 'thriller1' },
      //   { id: 13, name: 'family' },
    ],
    posterURL:
      'https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-60938694502129.webp',
    vote_average: 6.2,
    release_date: 2011,
  },
  {
    original_title: 'Test Movie2',
    genres: [
      { id: 1, name: 'drama2' },
      { id: 2, name: 'comedy2' },
      { id: 3, name: 'thriller2' },
    ],
    posterURL:
      'https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-32211140489658.webp',
    vote_average: 7.8,
    release_date: 2008,
  },
];
// localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// ☝Це mockup data, поки немає функціоналу додавання в localStorage ==============================

// STARTS HERE <=============<<<<

const clearMarkup = el => {
  el.innerHTML = '';
};

// const renderNoMoviesMarkup = () => {
//   let notFoundGIF = document.createElement('img');
//   notFoundGIF.src = new URL('../images/not-found-gif.gif', import.meta.url);

//   notFoundGIF.alt = 'Travolta from Pulp Fiction is searching for something';

//   refs.mainContainerEl.innerHTML = `<div class="no-movies-wrap">
//                 ${notFoundGIF.outerHTML}
//                 <p>No movies here yet</p>
//             </div>`;
// };

/**TEST */
clearMarkup(refs.mainContainerEl);
// renderNoMoviesMarkup();
/**TEST */

// const loadFromStorage = key => {
//   try {
//     const savedData = localStorage.getItem(key);

//     // If there are no movies added to the queue list in Local Storage, show Travolta GIF from Pulp Fiction
//     if (savedData === null) {
//       renderNoMoviesMarkup();
//       return;
//     }

//     parsedData = JSON.parse(savedData);
//     // потім переписати на return JSON.parse(savedData); ?
//     return parsedData;
//   } catch (error) {
//     console.error('Error: ', error.message);
//   }
// };

// const queueList = loadFromStorage(QUEUE_LIST);
// console.log('queueList:', queueList);

// clearMarkup(refs.mainContainerEl);

// queueList.map(movie => {
//   const { original_title, genres, posterURL, vote_average, release_date } =
//     movie;

//   let movieGenres = genres.map(genre => genre.name);
//   // !!! пропрацювати логіку, якщо жанрів більше 3, то замість 3-го поставити "Other"

//   refs.mainContainerEl.insertAdjacentHTML(
//     'beforeend',
//     `    <div class="main-section__card">
//         <img src="${posterURL}" alt="${original_title}" class="main-section__image" loading="lazy">

// 					<h2 class="main-section__card-title">${original_title}</h2>
//                     <div class="main-section__cards">
// 					<p class="main-section__description">${movieGenres} | ${release_date}</p>
//                 <span class="main-section__card-rating">${vote_average}</span>
//                 </div>

//     </div>`
//   );
// });
