(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-fr]"),
      closeModalBtn: document.querySelector("[data-modal-close-fr]"),
      modal: document.querySelector("[data-modal-fr]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();