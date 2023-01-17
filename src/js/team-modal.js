  
  
  const swiper = new Swiper(
    '.team-swiper', {
// Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },

});


(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-team-modal-open]'),
      closeModalBtn: document.querySelector('[data-team-modal-close]'),
      modal: document.querySelector('[data-team-modal]'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-team');
      refs.body.classList.toggle('no-scroll');
    }
  })();

 

 