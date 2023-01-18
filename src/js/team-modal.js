
(() => {

    const refs = {
      openModalBtn: document.querySelector('[data-team-modal-open]'),
      closeModalBtn: document.querySelector('[data-team-modal-close]'),
      modal: document.querySelector('[data-team-modal]'),
      body: document.querySelector('body'),
  };
  

    refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', escClose);
  
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-team');
      refs.body.classList.toggle('no-scroll');
  }
  
  function escClose(e) {
  if (e.key === 'Escape') {
    refs.modal.classList.add('is-hidden-team');
    refs.modal.classList.add('no-scroll');
  }
  }


  })();

 

 