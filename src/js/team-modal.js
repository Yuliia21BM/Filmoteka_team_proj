(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-modal-open]'),
    closeModalBtn: document.querySelector('[data-team-modal-close-btn]'),
    closeModal: document.querySelector('[data-team-modal-close]'),
    modal: document.querySelector('[data-team-modal]'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('[team__backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModal.addEventListener('click', toggleModal);
  document.addEventListener('keydown', escClose);
  backdrop.addEventListener('click', e => {
    if (e.target !== e.currentTurget) return;
    toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-team');
    refs.body.classList.toggle('no-scroll');
  }

  function escClose(e) {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden-team');
      refs.body.classList.remove('no-scroll');
    }
  }
})();
