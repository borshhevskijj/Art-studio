var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    625: {
      slidesPerView: 3,
    },
  },
})
