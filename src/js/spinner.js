export default class Spinner {
  constructor() {
    this.overlay = document.querySelector('.spinner__overlay');
    this.spinner = document.querySelector('.spinner');
  }

  enable() {
    this.overlay.classList.remove('is-hidden');
    this.spinner.classList.add('spinner--on');
  }

  disable() {
    this.overlay.classList.add('is-hidden');
    this.spinner.classList.remove('spinner--on');
  }
}