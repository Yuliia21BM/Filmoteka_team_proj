import { QUEUE_LIST, WATCHED_LIST } from './config';
import { loadFromStorage } from './localstorage-load-films';
import { refs } from './refs';

// -------------👇 Для тестів ------------
// localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// -------------☝ Для тестів -------------

// STARTS HERE <================================================================<<<<

const onWatchedBtnClick = () => {
  loadFromStorage(WATCHED_LIST);

  refs.queueBtn.classList.toggle('header-lib__btn--current');
  refs.watchedBtn.classList.toggle('header-lib__btn--current');
};

const onQueueBtnClick = () => {
  loadFromStorage(QUEUE_LIST);

  refs.watchedBtn.classList.toggle('header-lib__btn--current');
  refs.queueBtn.classList.toggle('header-lib__btn--current');
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

loadFromStorage(QUEUE_LIST);
