import { QUEUE_LIST, WATCHED_LIST } from './config';
import { loadFromStorage } from './localstorage-load-films';
import { refs } from './refs';

const onWatchedBtnClick = async () => {
  if (refs.watchedBtn.classList.contains('header-lib__btn--current')) {
    return;
  }
  await loadFromStorage(WATCHED_LIST);

  try {
    const activeTab = refs.watchedBtn.textContent;

    await localStorage.setItem('active-tab', JSON.stringify(activeTab));
  } catch (error) {
    console.error('Error: ', error.message);
  }

  refs.queueBtn.classList.toggle('header-lib__btn--current');
  refs.watchedBtn.classList.toggle('header-lib__btn--current');
};

const onQueueBtnClick = async () => {
  if (refs.queueBtn.classList.contains('header-lib__btn--current')) {
    return;
  }
  await loadFromStorage(QUEUE_LIST);

  try {
    const activeTab = refs.queueBtn.textContent;

    await localStorage.setItem('active-tab', JSON.stringify(activeTab));
  } catch (error) {
    console.error('Error: ', error.message);
  }

  refs.watchedBtn.classList.toggle('header-lib__btn--current');
  refs.queueBtn.classList.toggle('header-lib__btn--current');
};

const onLoad = async () => {
  try {
    const activeTab = await JSON.parse(localStorage.getItem('active-tab'));

    if (activeTab === refs.queueBtn.textContent) {
      refs.queueBtn.classList.toggle('header-lib__btn--current');

      return await loadFromStorage(QUEUE_LIST);
    }

    if (activeTab === refs.watchedBtn.textContent) {
      refs.watchedBtn.classList.toggle('header-lib__btn--current');

      return await loadFromStorage(WATCHED_LIST);
    }
  } catch (error) {
    console.log(error.message);
  }
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

onLoad();
