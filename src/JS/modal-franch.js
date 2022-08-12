(() => {
    const refs = {
      openModalBtn: document.querySelector("[franch-modal-open]"),
      closeModalBtn: document.querySelector("[franch-modal-close]"),
      modal: document.querySelector("[franch-modal]"),
      body: document.querySelector("[data-body]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();