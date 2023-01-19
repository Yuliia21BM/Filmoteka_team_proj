import { searchMovieById } from "./fetchApi"
import { openModal } from "./film-info-modal";
import Spinner from "./spinner";
const spinner = new Spinner();


const getRandomNumber = (max, min) => {
    return Math.floor((Math.random() * (Number(max) - min + 1)) + min);
}

const randomBtnWrapper = document.querySelector('.film-randomizer-btn');
randomBtnWrapper.addEventListener('click', (e) => {
    spinner.enable();
    searchMovieById('latest').then(latestFilm => {
        
        

        const openRandomFilmModal = () => {
            const randomId = getRandomNumber(latestFilm.id, 1);

            e.target.parentNode.dataset.filmId = randomId;
            
            searchMovieById(randomId).then(randomFilm => {

                if (!randomFilm) {
                    openRandomFilmModal();
                } else {
                    openModal(e, 'randomizer-btn-wrapper')
                    e.target.parentNode.dataset.filmId = ""
                    spinner.disable();
                }
            })
        }
        
        openRandomFilmModal();

    })

})