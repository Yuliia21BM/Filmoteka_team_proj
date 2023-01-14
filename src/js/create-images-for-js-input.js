let iconCross = document.createElement('img');
iconCross.src = new URL(
  '/src/images/svg/close-modal-film-icon.svg',
  import.meta.url
);



let defaultPoster = document.createElement('img');
defaultPoster.src = new URL(
  '/src/images/default-poster.jpg',
  import.meta.url
);

export {
    iconCross,
    defaultPoster,
};