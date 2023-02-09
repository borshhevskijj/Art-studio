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
