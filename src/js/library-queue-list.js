import { QUEUE_LIST } from './config';
import { loadFromStorage } from './localstorage-load-films';

// -------------👇 Для тестів ------------
// localStorage.setItem(QUEUE_LIST, JSON.stringify(movie));
// localStorage.removeItem(QUEUE_LIST);
// -------------☝ Для тестів -------------

// STARTS HERE <================================================================<<<<

loadFromStorage(QUEUE_LIST);
