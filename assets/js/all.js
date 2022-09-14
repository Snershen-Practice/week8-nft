"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//swiper
var swiper = new Swiper(".mySwiper", (_Swiper = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  // centeredSlidesBounds: true,
  autoplay: {
    delay: 4000
  }
}, _defineProperty(_Swiper, "slidesPerView", "auto"), _defineProperty(_Swiper, "coverflowEffect", {
  rotate: 0,
  stretch: -70,
  depth: 200,
  modifier: 1,
  slideShadows: false
}), _defineProperty(_Swiper, "pagination", {
  el: ".swiper-pagination"
}), _defineProperty(_Swiper, "breakpoints", {
  // when window width is >= 320px
  375: {
    slidesPerView: 2
  },
  // when window width is >= 480px
  768: {
    slidesPerView: 2
  },
  // when window width is >= 640px
  992: {
    slidesPerView: 2.83
  }
}), _Swiper)); // var swiper = new Swiper(".series_Swiper", {
//   // speed: 400,
//   // spaceBetween: 100,
//   slidesPerView: 3,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       // spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       // spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       // spaceBetween: 40,
//     },
//   },
// });
//# sourceMappingURL=all.js.map
