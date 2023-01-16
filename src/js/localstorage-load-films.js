import { refs } from './refs';
import { renderFilmCards, renderNoMoviesMarkup } from './render-card';
import { refs } from './refs';

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

    // треба доробити перевірку,
    // якщо в списку менше 20 фільмів, ховати пагінацію
    if (
      movieList.length < 20 &&
      !refs.paginationWrap.classList.contains('visually-hidden')
    ) {
      refs.paginationWrap.classList.add('visually-hidden');
    } else {
      refs.paginationWrap.classList.remove('visually-hidden');
    }

    console.log('movieList:', movieList);
    return renderFilmCards(movieList);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
