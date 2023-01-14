import { API_KEY } from './config';
import { BASE_URL } from './config';
import { QUEUE_LIST } from './config';
import { WATCHED_LIST } from './config';
import { searchMovieById } from './fetchApi';
import axios from 'axios';
import { Console } from 'console';

const familyBtn = document.querySelector('#family');
const renderFilmsArea = document.querySelector('.renderFilms');

familyBtn.addEventListener('click', getMovies);

// // function rengerGanre(id) {

// // }

// // function getMovies() {
// //     const urlAPI = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
// //     axios.get(urlAPI)
// //         .then(res => console.log(res.data.total_results))
// //         .then(({ results }) => renderFilms(results))
// //     .catch(error => console.log(error))
// // }



// function getMovies(page) {
//     // page = 1
//     for (let page = 1; page < 5; page++) {
//        const urlAPI = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     console.log(urlAPI);
//     axios.get(urlAPI)
//         .then(res => {
//             page += 1;
    
//             return res.data
//         })
//         .then(({ results }) => renderFilms(results))
        
//         // .then(({ results }) => renderFilms(results))
//     .catch(error => console.log(error))
//     }
    
// }


// function renderFilms(results) {
//     renderFilmsArea.innerHTML = '';
    
//     const movieElements = results.map(({ poster_path, title, genre_ids }) => {
//         if(genre_ids.includes(16))
//         return `<div class="main-section__card">
//         <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}" width="500" height="600" alt="${title}"  loading="lazy">
//     <p class="main-section__name">
// 					<h2 class="main-section__card-title">${title}</h2>
// 					<p class="main-section__description">Drama, Action | 2022</p>
// 				</p>
//     </div>`
//     }).join('');
//         renderFilmsArea.insertAdjacentHTML('beforeend', movieElements)
    
// }







