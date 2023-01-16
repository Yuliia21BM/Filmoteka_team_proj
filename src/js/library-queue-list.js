import { QUEUE_LIST } from './config';
import { loadFromStorage } from './localstorage-load-films';

// -------------👇Це mockup data, поки немає функціоналу додавання в localStorage ------------
const movie = [
  {
    id: 13,
    title: 'Test Movie1',
    genres: 'Drama, Family, Thriller',
    poster_path: '/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg',
    vote_average: '6.2',
    release_date: '2011-11-02',
  },
  {
    id: 2,
    title: 'Test Movie2',
    genres: 'Comedy, Family, Romance',
    poster_path: '/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg',
    vote_average: '7.8',
    release_date: '2008-11-02',
  },
  {
    id: 2,
    title: 'Test Movie2',
    genres: 'Comedy, Family, Romance',
    poster_path: '/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg',
    vote_average: '7.8',
    release_date: '2008-11-02',
  },
];
// localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// -------------☝Це mockup data, поки немає функціоналу додавання в localStorage -------------

// STARTS HERE <================================================================<<<<

loadFromStorage(QUEUE_LIST);
