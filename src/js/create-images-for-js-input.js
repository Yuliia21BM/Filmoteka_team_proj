let iconCross = document.createElement('img');
iconCross.src = new URL(
  '/src/images/svg/close-modal-film-icon.svg',
  import.meta.url
);

let defaultPoster = document.createElement('img');
defaultPoster.src = new URL('/src/images/default-poster.jpg', import.meta.url);

let notFoundFilm = document.createElement('img');
notFoundFilm.src = new URL('/src/images/not-found-gif.gif', import.meta.url);

export { iconCross, defaultPoster, notFoundFilm };
