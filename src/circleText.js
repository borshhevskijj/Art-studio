import { options } from "./noise";
const buttons = Array.from(document.querySelectorAll(".buttonText"));

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

// const text = document.querySelector(".text p");
// const _innerText = text.innerText.repeat(3);
// text.innerHTML = _innerText
//   .split("")
//   .map((char, i) => `<span>${char}</span>`)
//   .join("");
// const chars = text.querySelectorAll("span");
// chars.forEach((char, i) => {
//   char.style.transform = `translateX( ${
//     (-0.5 * char.getBoundingClientRect().width) / 15
//   }px) rotate(${(i - 30) * (360 / _innerText.length)}deg`;
// });

// setTextContent(masterСlass, 3);
// setTextContent(watchVideo, 4);
// setTextContent(buyWorkshops, 4);
// setTextContent(timetable, 6);
// setTextContent(form, 6);
// setTextContent(aboutCourse, 4);
// setTextContent(booking, 4);
// setTextContent(certificate, 4);
