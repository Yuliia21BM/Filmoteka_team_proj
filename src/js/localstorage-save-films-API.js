import { searchMovieById } from './fetchApi';

// const watchBtn = document.querySelector('[data-action="watch"]');
// const queueBtn = document.querySelector('[data-action="queue"]');

// watchBtn.addEventListener('click', addWatch);
// queueBtn.addEventListener('click', addQueue);

async function addWatch(e) {
  const id = e.currentTarget.dataset.id;

  try {
    const data = await getCardsData(id);
    if (!data) return;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function addQueue(e) {
  const id = e.currentTarget.dataset.id;

  try {
    const data = await getCardsData(id);
    if (!data) return;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
addWatch();
function addQueue(e) {}

async function getCardsData(id) {
  try {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const data = await searchMovieById(id);

    const filmData = {
      id: data.id,
      title: `${data.title ? data.title : 'Unknown'}`,
      poster: `${
        data.poster_path
          ? POSTER_URL + data.poster_path
          : '../images/default-poster.jpg'
      }`,
      genre: `${data.genres ? getGanre(data.genres) : 'Unknown'}`,
      rating: `${data.vote_average ? data.vote_average.toFixed(1) : '0'}`,
      date: `${data.release_date ? data.release_date.slice(0, 5) : 'n/a'}`,
    };
    return filmData;
  } catch (err) {
    throw err;
  }
}

function getGanre(arr) {
  const genre = arr
    .map(gener => gener.name)
    .join(', ')
    .split(',');
  console.log(genre);
  if (genre.length > 3) {
    return `${String(genre.slice(1))}, Other`;
  } else {
    return genre;
  }
}

// function localStorageFunction(movieData) {
//   const isLibraryPage = location.pathname.includes('library');
//   const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

//   function addWatch() {
//     if (movieData) {
//       let film = JSON.parse(localStorage.getItem('watch')) || [];
//       if (film.find(e => e.id === movieData.id)) {
//         watchBtn.classList.remove('button--accent-btn');
//         watchBtn.textContent = 'ADD TO WATCHED';
//         film = film.filter(e => e.id !== movieData.id);
//         if (isLibraryPage && cartItem && refs.isWatchTabActive) {
//           cartItem.remove();
//         }
//       } else {
//         watchBtn.classList.add('button--accent-btn');
//         watchBtn.textContent = 'REMOVE FROM WATCHED';
//         film.push(movieData);
//       }
//       localStorage.setItem('watch', JSON.stringify(film));
//     }
//     isLocalStorageEmpty('watch');
//   }

//   function addQueue() {
//     if (movieData) {
//       let film = JSON.parse(localStorage.getItem('queue')) || [];
//       if (film.find(e => e.id === movieData.id)) {
//         queueBtn.classList.remove('button--accent-btn');
//         queueBtn.textContent = 'ADD TO QUEUE';
//         film = film.filter(e => e.id !== movieData.id);

//         if (isLibraryPage && cartItem && !refs.isWatchTabActive) {
//           cartItem.remove();
//         }
//       } else {
//         queueBtn.classList.add('button--accent-btn');
//         queueBtn.textContent = 'REMOVE FROM QUEUE';
//         film.push(movieData);
//       }
//       localStorage.setItem('queue', JSON.stringify(film));
//     }
//     isLocalStorageEmpty('queue');
//   }
// }
