import $ from 'jquery';
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const body = document.querySelector('[data-body]');
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
    if (mobileMenuRef.classList.value !== 'mobile-menu is-open') {
      return;
    }
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
});