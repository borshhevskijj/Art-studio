import { options } from "./noise";
const buttons = Array.from(document.querySelectorAll(".buttonText"));
// const masterСlass = document.querySelector(".masterСlass");
// const watchVideo = document.querySelector(".watchVideo");
// const buyWorkshops = document.querySelector(".buy_workshops");
// const timetable = document.querySelector(".timetableMasterClass");
// const form = document.querySelector(".form_send");
// const aboutCourse = document.querySelector(".aboutCourse_leaveARequest");
// const booking = document.querySelector(".booking");
// const certificate = document.querySelector(".certificate");

export const setTextContent = (selector) => {
  let repeat = +selector.dataset.repeat;
  if (
    window.matchMedia("(max-width: 695px)").matches &&
    +selector.dataset.repeat > 3
  ) {
    repeat = +selector.dataset.repeat - 1;
  }
  selector.textContent = selector.textContent.toUpperCase().repeat(repeat);
  return new CircleType(selector);
};
// export const setTextContent = (selector, repeat) => {
//   if (window.matchMedia("(max-width: 695px)").matches && repeat > 3) {
//     repeat = repeat - 1;
//   }
//   selector.textContent = selector.textContent.toUpperCase().repeat(repeat);
//   return new CircleType(selector);
// };
const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const selector = entry.target;
      setTextContent(selector);
      observer.unobserve(selector);
    }
  });
};
const observer = new IntersectionObserver(callback, options);

buttons.forEach((button) => {
  observer.observe(button);
});

// setTextContent(masterСlass, 3);
// setTextContent(watchVideo, 4);
// setTextContent(buyWorkshops, 4);
// setTextContent(timetable, 6);
// setTextContent(form, 6);
// setTextContent(aboutCourse, 4);
// setTextContent(booking, 4);
// setTextContent(certificate, 4);
