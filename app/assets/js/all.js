//swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  // centeredSlidesBounds: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -70,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2.83,
    },
  },
});
