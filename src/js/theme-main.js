import { THEME } from './config';
import { changeColorThemeMain } from './change-color-theme';

const buttonRef = document.querySelector('.change-color');

const LS = localStorage.getItem(THEME);

let darkTheme = LS;

buttonRef.addEventListener('click', () => {
  darkTheme = !darkTheme;
  localStorage.setItem(THEME, darkTheme);
  changeColorThemeMain(darkTheme);
});

changeColorThemeMain(darkTheme);
