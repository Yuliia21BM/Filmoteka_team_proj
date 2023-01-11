// import axios from 'axios';
import searchMovieForName from '../js/fetchApi';
// import API_KEY from './config';
// import BASE_URL from './config';


const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__button');
const searchForm = document.querySelector('.search');
const error = document.querySelector('.warning-notification');


btn.addEventListener('click', e => {
    const query = input.value;
    console.log(query);
})


function getFilmByName(evt) {
    evt.preventDefault();

    try {
        const searchFilms = input.value.trim();
        searchMovieForName.query = searchFilms;
        if (searchMovieForName.query === '') {
            return (error.textContent =
                'No matches found for your query. Enter the correct movie name.');
        }
        else error.textContent = '';
    }
    
    catch (error) {
        console.log(error);
    }
}

