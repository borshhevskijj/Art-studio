const title = document.querySelectorAll(".subTitle");
const toLeft = document.querySelectorAll(".scrollRevealLeft");
const toRight = document.querySelectorAll(".scrollRevealRight");
const toOpacity = document.querySelectorAll(".scrollRevealOpacity");

const slideUp = {
  distance: "75%",
  origin: "bottom",
  duration: 800,
  delay: 250,
};
const slideLeft = {
  distance: "35%",
  origin: "left",
  viewFactor: 0.5,
  duration: 800,
  delay: 450,
};
const slideRight = {
  distance: "35%",
  origin: "right",
  viewFactor: 0.5,
  duration: 900,
  delay: 350,
};
const slideOpacity = {
  duration: 1000,
  viewFactor: 0.5,
  duration: 900,
  delay: 450,
};

ScrollReveal().reveal(title, slideUp);
ScrollReveal().reveal(toRight, slideRight);
ScrollReveal().reveal(toLeft, slideLeft);
ScrollReveal().reveal(toOpacity, slideOpacity);
