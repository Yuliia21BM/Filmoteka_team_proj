
const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');
const mainContainer = document.querySelector('.main-container');

paginationRef.addEventListener('click', onPaginationClick);

let currentPage = 1;
let totalPages = 1000;
let btns = document.querySelectorAll('.pagination-button');

prevDotsRef.hidden = true;
leftArrowRef.hidden = true;
firstPageRef.hidden = true;

// function setPagination(page, total_pages) {
//   currentPage = page;
//   totalPages = total_pages;
//   lastPageRef.textContent = totalPages;
//    btns.forEach(el => el.classList.remove('pagination--current'));
// }

function setCurrentPageto1(page) {
  currentPage = page;
  btns.forEach(el => el.classList.remove('pagination--current'));
  btn1Ref.classList.add('pagination--current');
}

function setTotalPages(total_pages) {
  totalPages = total_pages;
  lastPageRef.textContent = totalPages;
}

function onPaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent);
    }

    prevDotsRef.hidden = true;
    afterDotsRef.hidden = true;

    if (event.target.classList.contains('pagination-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      event.target.classList.add('pagination--current');
    }

    if (event.target.classList.contains('arrow-right') && currentPage < totalPages) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.classList.add('pagination--current');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = Number(btn1Ref.textContent);
    }

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination--current');
      currentPage = Number(btn5Ref.textContent);
    }

    if (event.target.classList.contains('first-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination--current');
      currentPage = Number(btn1Ref.textContent);
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (event.target.classList.contains('last-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
      btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
      btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
      btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination--current');
      currentPage = Number(btn5Ref.textContent);
      rightArrowRef.hidden = true;
      afterDotsRef.hidden = true;
      lastPageRef.hidden = true;
    }

    if (Number(currentPage) > 5) {
      leftArrowRef.hidden = false;
      prevDotsRef.hidden = false;
      firstPageRef.hidden = false;
    } else {
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (Number(currentPage) < totalPages - 4) {
      rightArrowRef.hidden = false;
      afterDotsRef.hidden = false;
      lastPageRef.hidden = false;
    }

    //     gallery.innerHTML = '';
    mainContainer.scrollIntoView({ behavior: 'smooth' })
  
          //  window.scrollTo({ top: 0, behavior: 'smooth' });
        // if (inputRef.value !== '') {
        //   movieSearcher(inputRef.value, currentPage);
        // } else {
        //   currentPage();
        // }
     
    if (_subscriber) { _subscriber() }
    
   
    let pageSize = 9;

    function defineResultsPerPage() {
      if (window.innerWidth >= 1024) {
        pageSize = 9;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        pageSize = 8;
      } else if (window.innerWidth < 768) {
        pageSize = 4;
      }
      return pageSize;
    }
  }
}

function getCurrentPage() {
  if (isNaN(currentPage)) {
    currentPage = 1;
  }
  console.log( "currentPage", currentPage )
  return +currentPage
}

let _subscriber;

function subscribeOnPageChange(subscriber) {
  _subscriber = subscriber;
}

console.log('paginationInit');
console.log('subscriber', _subscriber);
console.log('CurrentPage', currentPage)
export { getCurrentPage, subscribeOnPageChange, setCurrentPageto1, setTotalPages }

