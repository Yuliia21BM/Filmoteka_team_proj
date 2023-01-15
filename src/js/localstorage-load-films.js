import { renderNoMoviesMarkup } from './render-card';

export const loadFromStorage = key => {
  try {
    const savedData = localStorage.getItem(key);

    // If there are no movies added to the queue list in Local Storage, show Travolta GIF from Pulp Fiction
    if (savedData === null) {
      renderNoMoviesMarkup();
      return;
    }

    parsedData = JSON.parse(savedData);
    // потім переписати на return JSON.parse(savedData); ?
    return parsedData;
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
