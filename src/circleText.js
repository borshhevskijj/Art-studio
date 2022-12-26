const masterСlass = document.querySelector(".masterСlass");
const watchVideo = document.querySelector(".watchVideo");
const buyWorkshops = document.querySelector(".buy_workshops");
const timetable = document.querySelector(".timetableMasterClass");
const form = document.querySelector(".form_send");
const aboutCourse = document.querySelector(".aboutCourse_leaveARequest");
const booking = document.querySelector(".booking");
const certificate = document.querySelector(".certificate");

// const burgerMasterClass = document.querySelector(".burgerMasterClass");

export const setTextContent = (selector, repeat) => {
  selector.textContent = selector.textContent.toUpperCase().repeat(repeat);
  return new CircleType(selector);
};

setTextContent(masterСlass, 3);
setTextContent(watchVideo, 4);
setTextContent(buyWorkshops, 4);
setTextContent(timetable, 6);
setTextContent(form, 6);
setTextContent(aboutCourse, 4);
setTextContent(booking, 4);
setTextContent(certificate, 4);

// const navBar = document.querySelector(".navBar");

// navBar.addEventListener("DOMNodeInserted", () => {
//   const burgerMasterClass = document.querySelector(".burgerMasterClass");
//   setTextContent(burgerMasterClass, 3);
//   console.log("qwwww");
// });
