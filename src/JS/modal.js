(() => {
    const refs = {
      openModalBtn: document.querySelector("[mode-modal-open]"),
      closeModalBtn: document.querySelector("[mode-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();