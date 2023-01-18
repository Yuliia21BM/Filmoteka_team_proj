import { THEME } from './config.js';

const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');

export function changeColorThemeMain(darkTheme) {
  const cardTitle = document.querySelectorAll('.main-section__card-title');
  const genreBtn = document.querySelectorAll('.genres-button');
  const paginBtn = document.querySelectorAll('.pagination-button');
  const dots = document.querySelectorAll('.dots');

  if (!darkTheme) {
    iconMoon.style.opacity = 1;
    iconSun.style.opacity = 0;
    document.body.style.backgroundColor = '#fff';
    // console.log(cardTitle);
    cardTitle.forEach(el => {
      el.style.color = '#000';
    });
    genreBtn.forEach(el => {
      el.style.color = '#000';
    });
    genreBtn.forEach(el => {
      el.style.borderColor = '#000';
    });
    paginBtn.forEach(el => {
      if (
        el.classList.contains('pagination--current') ||
        el.classList.contains('arrow-left') ||
        el.classList.contains('arrow-right')
      )
        return;
      // if (
      //   el.classList.contains('arrow-left') ||
      //   el.classList.contains('arrow-right')
      // ) {
      //   el.style.fill = '#000';
      // }
      el.style.backgroundColor = '#fff';
      el.style.color = '#000';
      el.style.border = 'none';
    });
    dots.forEach(el => {
      el.style.color = '#000';
    });
  } else {
    iconMoon.style.opacity = 0;
    iconSun.style.opacity = 1;
    document.body.style.backgroundColor = '#181F25';
    cardTitle.forEach(el => {
      el.style.color = '#fff';
    });
    genreBtn.forEach(el => {
      el.style.color = '#fff';
    });
    genreBtn.forEach(el => {
      el.style.borderColor = '#fff';
    });
    paginBtn.forEach(el => {
      if (
        el.classList.contains('pagination--current') ||
        el.classList.contains('arrow-left') ||
        el.classList.contains('arrow-right')
      )
        return;
      // if (
      //   el.classList.contains('arrow-left') ||
      //   el.classList.contains('arrow-right')
      // ) {
      //   el.style.fill = '#fff';
      // }
      el.style.backgroundColor = '#181F25';
      el.style.color = '#fff';
      el.style.border = '1px solid #fff';
      el.style.borderRadius = '5px';
    });
    dots.forEach(el => {
      el.style.color = '#fff';
    });
  }
}

export function changeColorThemeLib(darkTheme) {
  const cardTitle = document.querySelectorAll('.main-section__card-title');

  if (!darkTheme) {
    iconMoon.style.opacity = 1;
    iconSun.style.opacity = 0;
    document.body.style.backgroundColor = '#fff';
    // console.log(cardTitle);
    cardTitle.forEach(el => {
      el.style.color = '#000';
    });
  } else {
    iconMoon.style.opacity = 0;
    iconSun.style.opacity = 1;
    document.body.style.backgroundColor = '#000';
    cardTitle.forEach(el => {
      el.style.color = '#fff';
    });
  }
}
