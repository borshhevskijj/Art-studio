const title = document.querySelectorAll(".subTitle");
const toLeft = document.querySelectorAll(".scrollRevealLeft");
const toRight = document.querySelectorAll(".scrollRevealRight");
const toOpacity = document.querySelectorAll(".scrollRevealOpacity");
ScrollReveal.debug = true;

const slideUp = {
  origin: "bottom",
  duration: 1000,
  delay: 450,
  distance: "350px",
};

const slideLeft = {
  origin: "left",
  duration: 1350,
  delay: 550,
  distance: "450px",
};
const slideRight = {
  origin: "right",
  duration: 1250,
  delay: 450,
  distance: "450px",
};
const slideOpacity = {
  duration: 1000,
  duration: 900,
  delay: 650,
  // distance: "350px",
  // origin: "bottom",
};

ScrollReveal().reveal(title, slideUp);
ScrollReveal().reveal(toRight, slideRight);
ScrollReveal().reveal(toLeft, slideLeft);
ScrollReveal().reveal(toOpacity, slideOpacity);
