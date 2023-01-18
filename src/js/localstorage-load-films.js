// import { refs } from './refs';
import { renderFilmCards, renderNoMoviesMarkup } from './render-card';

const sortForm = document.querySelector('.sort-class');

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

  sortForm.addEventListener('change', function () {
    if (this.value === 'By popularity') {

      const maxToMinRate = movieList.sort((maxRate, minRate) => minRate.vote_average - maxRate.vote_average);
      renderFilmCards(maxToMinRate);
    } else if (this.value === 'By relase date') {
      const maxToMinYear = movieList.sort((maxYear, minYear) => minYear.release_date - maxYear.release_date);
      renderFilmCards(maxToMinYear);
    }
});

    // треба доробити перевірку,
    // якщо в списку менше 20 фільмів, ховати пагінацію
    // if (
    //   movieList.length < 20 &&
    //   !refs.paginationWrap.classList.contains('visually-hidden')
    // ) {
    //   refs.paginationWrap.classList.add('visually-hidden');
    // } else {
    //   refs.paginationWrap.classList.remove('visually-hidden');
    // }

    // console.log('movieList:', movieList);
    return renderFilmCards(movieList);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
