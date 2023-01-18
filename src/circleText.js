const masterСlass = document.querySelector(".masterСlass");
const watchVideo = document.querySelector(".watchVideo");
const buyWorkshops = document.querySelector(".buy_workshops");
const timetable = document.querySelector(".timetableMasterClass");
const form = document.querySelector(".form_send");
const aboutCourse = document.querySelector(".aboutCourse_leaveARequest");
const booking = document.querySelector(".booking");
const certificate = document.querySelector(".certificate");

export const setTextContent = (selector, repeat) => {
  if (window.matchMedia("(max-width: 700px)").matches && repeat > 3) {
    repeat = repeat - 1;
  }
  selector.textContent = selector.textContent.toUpperCase().repeat(repeat);
  return new CircleType(selector);
};

setTextContent(masterСlass, 3);
setTextContent(watchVideo, 4); //3
setTextContent(buyWorkshops, 4); //3
setTextContent(timetable, 6); //4
setTextContent(form, 6); //5
setTextContent(aboutCourse, 4); //3
setTextContent(booking, 4); //3
setTextContent(certificate, 4); //3
