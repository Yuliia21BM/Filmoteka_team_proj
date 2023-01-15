import { searchMovieById } from './fetchApi';
import { QUEUE_LIST, WATCHED_LIST } from './config';

export async function addWatch(e) {
  const id = e.currentTarget.dataset.id;

  try {
    const data = await getCardsData(id);
    if (!data) return;
    // console.log(e.target.textContent);

    const allFilms = JSON.parse(localStorage.getItem(WATCHED_LIST)) || [];
    let deleted = false;
    allFilms.forEach(film => {
      if (film.id === data.id) {
        const index = allFilms.indexOf(film);
        allFilms.splice(index, 1);
        deleted = true;
        e.target.textContent = 'ADD TO WATCHED';
        // Змінити текст кнопки на 'ADD TO QUEUE'
      }
    });
    if (!deleted) {
      allFilms.push(data);
      e.target.textContent = 'REMOVE FROM WATCHED';
      // Змінити текст кнопки на 'REMOVE FROM WATCHED'
    }
    localStorage.setItem(WATCHED_LIST, JSON.stringify(allFilms));
  } catch (err) {
    console.log(err);
  }
}

export async function addQueue(e) {
  const id = e.currentTarget.dataset.id;

  try {
    const data = await getCardsData(id);
    if (!data) return;

    const allFilms = JSON.parse(localStorage.getItem(QUEUE_LIST)) || [];

    let deleted = false;
    allFilms.forEach(film => {
      if (film.id === data.id) {
        const index = allFilms.indexOf(film);
        allFilms.splice(index, 1);
        deleted = true;
        e.target.textContent = 'ADD TO QUEUE';
        // Змінити текст кнопки на 'ADD TO QUEUE'
      }
    });
    if (!deleted) {
      allFilms.push(data);
      e.target.textContent = 'REMOVE FROM QUEUE';
      // Змінити текст кнопки на 'REMOVE FROM QUEUE'
    }
    localStorage.setItem(QUEUE_LIST, JSON.stringify(allFilms));
  } catch (err) {
    console.log(err);
  }
}
async function getCardsData(id) {
  try {
    const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
    const data = await searchMovieById(id);

    const filmData = {
      id: data.id,
      title: `${data.title ? data.title : 'Unknown'}`,
      poster_path: `${
        data.poster_path
          ? POSTER_URL + data.poster_path
          : '../images/default-poster.jpg'
      }`,
      genres: `${data.genres ? getGanre(data.genres) : 'Unknown'}`,
      vote_average: `${data.vote_average ? data.vote_average.toFixed(1) : '0'}`,
      release_date: `${
        data.release_date ? data.release_date.slice(0, 4) : 'n/a'
      }`,
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
  if (genre.length > 3) {
    return `${genre.slice(1)}, Other`;
  } else {
    return genre;
  }
}
