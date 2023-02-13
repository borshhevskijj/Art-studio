import { setTextContent } from "./circleText";
import { drawing } from "./noise";
const navBar = document.querySelector(".navBar");
const navLink = document.querySelectorAll(".navigation a");
const burgerBtn = document.querySelector(".brgMenu");

const contacts_phoneClone = document
  .querySelector(".contacts_phone")
  .cloneNode(true);
const contactsIconsClone = document
  .querySelector(".contactsIcons")
  .cloneNode(true);

const mainButtonClone = document.querySelector(".main_button").cloneNode(true);
const buttonText = mainButtonClone.querySelector("span");
buttonText.classList.add("burgerMasterClass");
buttonText.classList.remove("masterСlass");

const brgContactsWrapper = document.createElement("div");
brgContactsWrapper.classList.add("burgerMenuContactsWrapper");
brgContactsWrapper.append(contacts_phoneClone);
brgContactsWrapper.append(contactsIconsClone);

burgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  burgerBtn.classList.toggle("open");

  if (navBar.classList.contains("active")) {
    // navBar.style.height = window.innerHeight;
    navBar.append(mainButtonClone);
    navBar.append(brgContactsWrapper);
    document.documentElement.style.overflowY = "hidden";
    return;
  }
  // navBar.style.height = "0px";
  navBar.removeChild(mainButtonClone);
  navBar.removeChild(brgContactsWrapper);
  document.documentElement.style.overflowY = "initial";
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    burgerBtn.classList.remove("open");
    document.documentElement.style.overflowY = "initial";
  });
});

const brgEllipseContainer = document.createElement("div");
brgEllipseContainer.classList.add("ellipseContainer");

export const canvasBrg = document.createElement("canvas");
const span = document.createElement("span");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
span.classList.add("elipseBlue");
span1.classList.add("elipsePurple");
span2.classList.add("elipsePink");

brgEllipseContainer.append(canvasBrg);
brgEllipseContainer.append(span);
brgEllipseContainer.append(span1);
brgEllipseContainer.append(span2);

const burgerBtnObs = new MutationObserver(function () {
  if (
    burgerBtn.classList.contains("open") &&
    navBar.classList.contains("active")
  ) {
    setTextContent(document.querySelector(".burgerMasterClass"), 1);
    navBar.append(brgEllipseContainer);
    drawing(canvasBrg);
    burgerBtnObs.disconnect();
  }
});

const options = {
  attributes: true,
  childList: true,
  characterData: true,
};
burgerBtnObs.observe(navBar, options);

const resizeObs = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (
      entry.contentRect.width > 695 &&
      burgerBtn.classList.contains("open") &&
      navBar.classList.contains("active")
    ) {
      burgerBtn.classList.remove("open");
      navBar.classList.remove("active");
      navBar.removeChild(mainButtonClone);
      navBar.removeChild(brgContactsWrapper);
      document.documentElement.style.overflowY = "initial";
    }
  }
});
resizeObs.observe(document.documentElement);

const header = document.querySelector("header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  if (window.matchMedia("(max-width: 695px)").matches) {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.transform = "translateY(0px)";
    } else {
      header.style.transform = "translateY(-220px)";
    }
    prevScrollpos = currentScrollPos;
    return;
  }
  header.style.transform = "translateY(0px)";
};
