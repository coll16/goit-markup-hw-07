(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-modal-open]"),
      closeMenuBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle('no-scroll')
    }
  })();