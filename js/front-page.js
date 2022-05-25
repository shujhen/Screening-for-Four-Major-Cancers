var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 75,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
function hideIframe(){
  const iframe = document.querySelector('iframe');
  iframe.style.display = 'none';
}

