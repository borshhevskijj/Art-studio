var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination1",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // 625: {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    833: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1026: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // 625: {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    833: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1026: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
