import { renderFilmCards, renderNoMoviesMarkup } from './render-card';

// Returns parsed data from Local Storage
export const loadFromStorage = async key => {
  try {
    const savedData = localStorage.getItem(key);

    // If there are no movies added to list in Local Storage, show Travolta GIF from Pulp Fiction
    if (!savedData || savedData.length <= 2) {
      renderNoMoviesMarkup();
      return;
    }

    let movieList = await JSON.parse(savedData);

    return renderFilmCards(movieList);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
