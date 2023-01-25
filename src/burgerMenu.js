import { setTextContent } from "./circleText";
import { drawing } from "./noise";
const navBar = document.querySelector(".navBar");
const navLink = document.querySelectorAll(".navigation a");
const burgerBtn = document.querySelector(".brgMenu");

const phoneClone = document.querySelector(".contacts_phone").cloneNode(true);
const contactsIconsClone = document
  .querySelector(".contactsIcons")
  .cloneNode(true);

// -err
// const mainButton = document.querySelector(".main_button");
// const masterClassBtnClone = mainButton.cloneNode(true);
// const circleText = masterClassBtnClone.querySelector(".circleText");
// circleText.firstChild.nextSibling.classList.add("burgerMasterClass");
// circleText.firstChild.nextSibling.classList.remove("masterСlass");

const replacementNodeForMasterClassBtn = document.createElement("div");
replacementNodeForMasterClassBtn.classList.add("circleText");
{
  /* <span class="burgerMasterClass buttonText">выбрать мастер-класс |</span>; */
}
const spanBrg = document.createElement("span");
spanBrg.classList.add("burgerMasterClass");
spanBrg.classList.add("buttonText");
spanBrg.innerHTML = "выбрать мастер-класс | ";
replacementNodeForMasterClassBtn.append(spanBrg);

const masterClassBtnClone = document
  .querySelector(".main_button")
  .cloneNode(true);

// console.log(masterClassBtnClone.childNodes.item(3));

masterClassBtnClone.replaceChild(
  spanBrg,
  masterClassBtnClone.childNodes.item(3)
);

// -err

const contactsWrapper = document.createElement("div");
contactsWrapper.classList.add("burgerMenuContactsWrapper");
contactsWrapper.append(phoneClone);
contactsWrapper.append(contactsIconsClone);

burgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  burgerBtn.classList.toggle("open");

  if (navBar.classList.contains("active")) {
    navBar.append(masterClassBtnClone);
    navBar.append(contactsWrapper);
    document.documentElement.style.overflowY = "hidden";
    return;
  }
  navBar.removeChild(masterClassBtnClone);
  navBar.removeChild(contactsWrapper);
  document.documentElement.style.overflowY = "initial";
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    burgerBtn.classList.remove("open");
    document.documentElement.style.overflowY = "initial";
  });
});

const ellipseContainer = document.createElement("div");
ellipseContainer.classList.add("ellipseContainer");

export const canvasBrg = document.createElement("canvas");
const span = document.createElement("span");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
span.classList.add("elipseBlue");
span1.classList.add("elipsePurple");
span2.classList.add("elipsePink");

ellipseContainer.append(canvasBrg);
ellipseContainer.append(span);
ellipseContainer.append(span1);
ellipseContainer.append(span2);

//

const burgerBtnObs = new MutationObserver(function (entries) {
  // if (document.querySelector(".burgerMasterClass")) {
  if (
    burgerBtn.classList.contains("open") &&
    navBar.classList.contains("active")
  ) {
    setTextContent(document.querySelector(".burgerMasterClass"), 3);
    //tut
    navBar.append(ellipseContainer);
    drawing([canvasBrg]);
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
      navBar.removeChild(masterClassBtnClone);
      navBar.removeChild(contactsWrapper);
      // ellipseContainer.style.display = "none";
      // ellipseContainer.remove();
      // navBar.removeChild(ellipseContainer);
      document.documentElement.style.overflowY = "initial";
    }
    // if (
    //   entry.contentRect.width <= 695 &&
    //   !burgerBtn.classList.contains("open") &&
    //   !navBar.classList.contains("active")
    // ) {
    //   navBar.append(ellipseContainer);
    //   drawing([canvasBrg]);
    // }
  }
});
resizeObs.observe(document.documentElement);

const header = document.querySelector("header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  if (window.matchMedia("(max-width: 695px)").matches) {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0px";
    } else {
      header.style.top = "-220px";
    }
    prevScrollpos = currentScrollPos;
    return;
  }

  header.style.top = "0px";
  // header.style.opacity = 1;
};
