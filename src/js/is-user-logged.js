import { IS_LOGED } from './config';

const isLogged = JSON.parse(localStorage.getItem(IS_LOGED)) || false;

if (isLogged) {
  authBtn.style.border = '1px solid green';
} else {
  authBtn.style.border = '1px solid red';
}

console.log('is user logged');
