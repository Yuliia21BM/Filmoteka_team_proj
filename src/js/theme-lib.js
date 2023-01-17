import { THEME } from './config';
import { changeColorThemeLib } from './change-color-theme';

const buttonRef = document.querySelector('.change-color');

const LS = JSON.parse(localStorage.getItem(THEME));
let darkTheme = LS;

buttonRef.addEventListener('click', () => {
  darkTheme = !darkTheme;
  localStorage.setItem(THEME, darkTheme);
  changeColorThemeLib(darkTheme);
});

changeColorThemeLib((darkTheme = darkTheme || false));
