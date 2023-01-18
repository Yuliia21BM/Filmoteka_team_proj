const swiper = new Swiper(
    '.team-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 2500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});