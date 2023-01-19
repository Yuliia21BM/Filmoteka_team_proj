import { searchMovieByName } from '../js/fetchApi';
import { renderFilmCards } from '../js/render-card';
import * as pagination from './pagination';
import { notFoundFilm } from '../js/create-images-for-js-input';
import { refs } from './refs';

const error = document.querySelector('.warning-notification');

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  refs.searchInput.blur();
  refs.mainContainerEl.scrollIntoView({ behavior: 'smooth' });
  const value = e.currentTarget.searchQuery.value.trim();

  await getMoviesHandler(value);
  pagination.setCurrentPageto1();
  pagination.subscribeOnPageChange(() => {
    getMoviesHandler(refs.searchInput.value);

    // console.log(input.value, input.text, 'subscriberTextContent')
  });
}

async function getMoviesHandler(value) {
  if (value === '') {
    return (error.textContent =
      'No matches found for your query. Enter the correct movie name.');
  } else error.textContent = '';

  try {
    const response = await searchMovieByName(
      value,
      pagination.getCurrentPage()
    );
    pagination.setTotalPages(response.total_pages);
    const getMovie = response.results;
    // console.log(response);
    // console.log(getMovie);

    if (getMovie.length === 0) {
      return (
        (error.textContent = `No matches found for your query. Enter the correct movie name.`),
        (refs.mainContainerEl.innerHTML = ' '),
        (refs.mainContainerEl.innerHTML = `<div class="wrong-box"> <p class="not-found-text">Not Found</p></div>`),
        document
          .querySelector('.wrong-box')
          .prepend(notFoundFilm)
          .classList.add('film-not-found'),
        document
          .querySelector('.pagination-container')
          .classList.add('visually-hidden')
      );
    } else {
      (error.textContent = ''),
        document
          .querySelector('.pagination-container')
          .classList.remove('visually-hidden');
    }

    renderFilmCards(getMovie);
  } catch (error) {
    console.log(error);
  }
}
