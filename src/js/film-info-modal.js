import { searchMovieById } from './fetchApi';

const basicLightbox = require('basiclightbox');
const filmCardSection = document.querySelector('.main-section__allcards');


filmCardSection.addEventListener('click', (e) => {
    if (e.target.parentNode.className !== 'main-section__card') {
        return
    };

    searchMovieById(78).then(movieInfo => {
        const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
        const getGener = movieInfo.genres.map(gener => gener.name).join(', ');
        const basicLightboxOptions = {
            onShow: () => {
                document.body.classList.add('hide-scroll');
            },

	        onClose: () => {
                document.body.classList.remove('hide-scroll');
            }
        }

        const createFilmModalMarkup = basicLightbox.create(`
        <div class="film-modal">
            <div class="film-modal__wrapper">
                <img class="film-modal__poster" src="${POSTER_URL + movieInfo.poster_path}" alt="Movie ${movieInfo.title} poster" />
                <div>
                    <h2 class="film-modal__title">${movieInfo.title}</h2>
                    <ul class="film-modal__info-list">
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Vote / Votes</h3>
                            <p class="film-modal__info-text">${movieInfo.vote_average}/${movieInfo.vote_count}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Popularity</h3>
                            <p class="film-modal__info-text">${movieInfo.popularity}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Original Title</h3>
                            <p class="film-modal__info-text">${movieInfo.original_title}</p>
                        </li>
                        <li class="film-modal__info-item">
                            <h3 class="film-modal__info-title">Genre</h3>
                            <p class="film-modal__info-text">${getGener}</p>
                        </li>
                    </ul>
                    <h3 class="film-modal__title-about">About</h3>
                    <p class="film-modal__text-about">${movieInfo.overview}</p>
                </div>
            </div>
        </div>`, basicLightboxOptions);
        
        createFilmModalMarkup.show();
    });
});




