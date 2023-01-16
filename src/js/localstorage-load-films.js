import { renderFilmCards, renderNoMoviesMarkup } from './render-card';

// Returns parsed data from Local Storage
export const loadFromStorage = key => {
  try {
    const savedData = localStorage.getItem(key);

    // If there are no movies added to list in Local Storage, show Travolta GIF from Pulp Fiction
    if (!savedData) {
      renderNoMoviesMarkup();
      return;
    }

    let movieList = JSON.parse(savedData);

    renderFilmCards(movieList);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
