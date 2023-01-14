import { searchMovieByName } from '../js/fetchApi';
import { renderFilmCards } from '../js/render-card';


const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__button');
const searchForm = document.querySelector('.search');
const error = document.querySelector('.warning-notification');


searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const value = e.currentTarget.searchQuery.value.trim();
    console.log(value);

    if (value === '') {
            return (error.textContent =
                'No matches found for your query. Enter the correct movie name.');
        }
        else error.textContent = '';

    try {
        const response = await searchMovieByName(value);
        const getMovie = response.results;
        console.log(getMovie);

        if (getMovie.length === 0) {
        return (error.textContent = `No matches found for your query. Enter the correct movie name.`);
    }
    else { error.textContent = '' };

    renderFilmCards(getMovie);

    }
        
    catch (error) {
        console.log(error);
    }
    };



// функція makingMarkup

// renderCollection(getMovie); - функція рендеру карток - ?

//   localStorage



// ... функція createPagination



