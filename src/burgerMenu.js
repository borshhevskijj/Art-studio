import { setTextContent } from "./circleText";
import { drawing } from "./noise";
const navBar = document.querySelector(".navBar");
const navLink = document.querySelectorAll(".navigation a");
const burgerBtn = document.querySelector(".brgMenu");

const masterClassBtnClone = document
  .querySelector(".main_button")
  .cloneNode(true);
const phoneClone = document.querySelector(".contacts_phone").cloneNode(true);
const contactsIconsClone = document
  .querySelector(".contactsIcons")
  .cloneNode(true);

const replacementNodeForMasterClassBtn = document.createElement("div");
replacementNodeForMasterClassBtn.classList.add("circleText");
replacementNodeForMasterClassBtn.innerHTML = `
<span class="burgerMasterClass buttonText">
  выбрать мастер-класс |
 </span>`;
masterClassBtnClone.replaceChild(
  replacementNodeForMasterClassBtn,
  masterClassBtnClone.childNodes.item(3)
);

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

const burgerBtnObs = new MutationObserver(function (entries) {
  if (document.querySelector(".burgerMasterClass")) {
    setTextContent(document.querySelector(".burgerMasterClass"), 3);
    //tut
    navBar.append(ellipseContainer);
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
      entry.contentRect.width >= 695 &&
      document.querySelector(".burgerMasterClass")
    ) {
      burgerBtn.classList.remove("open");
      navBar.classList.remove("active");
      navBar.removeChild(masterClassBtnClone);
      navBar.removeChild(contactsWrapper);
      navBar.removeChild(ellipseContainer);
      document.documentElement.style.overflowY = "initial";
    }
  }
});

resizeObs.observe(document.documentElement);
