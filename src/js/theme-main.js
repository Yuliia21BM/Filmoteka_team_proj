import { THEME } from './config';
import { changeColorThemeMain } from './change-color-theme';

const buttonRef = document.querySelector('.change-color');

let darkTheme = localStorage.getItem(THEME) || false;

buttonRef.addEventListener('click', () => {
  darkTheme = !darkTheme;
  localStorage.setItem(THEME, darkTheme);
  changeColorThemeMain();
});
changeColorThemeMain();
