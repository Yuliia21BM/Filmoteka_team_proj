import { QUEUE_LIST, WATCHED_LIST } from './config';
import { loadFromStorage } from './localstorage-load-films';
import { refs } from './refs';

// -------------👇 Для тестів ------------
// localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// -------------☝ Для тестів -------------

// STARTS HERE <================================================================<<<<

const onWatchedBtnClick = () => {
  if (refs.watchedBtn.classList.contains('header-lib__btn--current')) {
    return;
  }
  loadFromStorage(WATCHED_LIST);

  refs.queueBtn.classList.toggle('header-lib__btn--current');
  refs.watchedBtn.classList.toggle('header-lib__btn--current');
};

const onQueueBtnClick = () => {
  if (refs.queueBtn.classList.contains('header-lib__btn--current')) {
    return;
  }
  loadFromStorage(QUEUE_LIST);

  refs.watchedBtn.classList.toggle('header-lib__btn--current');
  refs.queueBtn.classList.toggle('header-lib__btn--current');
};

const onLoad = () => {
  // Проблема: якщо активний список watched, при перезавантаженні свторінки,
  //  кнопки ще неактивні, і класів теж нема, тому завантажується queue.
  // Варто ще попрацювати над функцією
  if (
    !refs.queueBtn.classList.contains('header-lib__btn--current') ||
    !refs.watchedBtn.classList.contains('header-lib__btn--current')
  ) {
    refs.queueBtn.classList.toggle('header-lib__btn--current');
    loadFromStorage(QUEUE_LIST);
  } else if (refs.queueBtn.classList.contains('header-lib__btn--current')) {
    // refs.queueBtn.classList.toggle('header-lib__btn--current');
    // refs.watchedBtn.classList.toggle('header-lib__btn--current');

    loadFromStorage(QUEUE_LIST);
  } else if (refs.watchedBtn.classList.contains('header-lib__btn--current')) {
    // refs.watchedBtn.classList.toggle('header-lib__btn--current');
    // refs.queueBtn.classList.toggle('header-lib__btn--current');

    loadFromStorage(WATCHED_LIST);
  }
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

onLoad();
