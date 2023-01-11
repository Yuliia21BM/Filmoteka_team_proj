import { searchUpcomimgFilms } from './fetchApi';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1500,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

async function getUpcomingFilms() {
  try {
    const data = await searchUpcomimgFilms();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getUpcomingFilms();

// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // pagination: {
//   //   el: '.swiper-pagination',
//   //   clickable: true,
//   // },

//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
