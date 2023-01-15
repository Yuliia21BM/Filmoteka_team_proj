import { renderNoMoviesMarkup } from './render-card';

// Returns parsed data from Local Storage
export const loadFromStorage = key => {
  try {
    const savedData = localStorage.getItem(key);

    // If there are no movies added to list in Local Storage, show Travolta GIF from Pulp Fiction
    if (savedData === null) {
      renderNoMoviesMarkup();
      return;
    }

    return JSON.parse(savedData);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
