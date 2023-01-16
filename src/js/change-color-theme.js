const spanEl = document.querySelectorAll('.color');
const buttonRef = document.querySelector('.change-color');
const icon = document.querySelector('.icon');



buttonRef.addEventListener('click', () => {
  spanEl.forEach(element => {
    if (element.style.cssText !== 'background-color: grey;') {
      element.setAttribute('style', 'background-color: ' + 'grey');
      icon.setAttribute('style', 'fill: ' + 'grey');
    } else {
      element.setAttribute('style', 'background-color: ' + '#fff');
      icon.setAttribute('style', 'fill: ' + '#fff');
    
    }
  });
});