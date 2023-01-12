const watchBtn = document.querySelector('[data-action="watch"]');
const queueBtn = document.querySelector('[data-action="queue"]');

watchBtn.addEventListener('click', addWatch);
queueBtn.addEventListener('click', addQueue);

function localStorageFunction(movieData) {
  const isLibraryPage = location.pathname.includes('library');
  const cartItem = document.querySelector(`[data-id="${movieData.id}"]`);

  function addWatch() {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('watch')) || [];
      if (film.find(e => e.id === movieData.id)) {
        watchBtn.classList.remove('button--accent-btn');
        watchBtn.textContent = 'ADD TO WATCHED';
        film = film.filter(e => e.id !== movieData.id);
        if (isLibraryPage && cartItem && refs.isWatchTabActive) {
          cartItem.remove();
        }
      } else {
        watchBtn.classList.add('button--accent-btn');
        watchBtn.textContent = 'REMOVE FROM WATCHED';
        film.push(movieData);
      }
      localStorage.setItem('watch', JSON.stringify(film));
    }
    isLocalStorageEmpty('watch');
  }

  function addQueue() {
    if (movieData) {
      let film = JSON.parse(localStorage.getItem('queue')) || [];
      if (film.find(e => e.id === movieData.id)) {
        queueBtn.classList.remove('button--accent-btn');
        queueBtn.textContent = 'ADD TO QUEUE';
        film = film.filter(e => e.id !== movieData.id);

        if (isLibraryPage && cartItem && !refs.isWatchTabActive) {
          cartItem.remove();
        }
      } else {
        queueBtn.classList.add('button--accent-btn');
        queueBtn.textContent = 'REMOVE FROM QUEUE';
        film.push(movieData);
      }
      localStorage.setItem('queue', JSON.stringify(film));
    }
    isLocalStorageEmpty('queue');
  }
}
