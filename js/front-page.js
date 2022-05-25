var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 13,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    799: {
      spaceBetween: 75,
    }   
  }
});

function hideIframe() {
  const iframe = document.querySelector('iframe');
  iframe.style.display = 'none';
}

