import { setTextContent } from "./circleText";
const navBar = document.querySelector(".navBar");
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
    document.documentElement.style.overflowY = "hidden";
    navBar.append(masterClassBtnClone);
    navBar.append(contactsWrapper);
    return;
  }
  document.documentElement.style.overflowY = "initial";
});

const observer = new MutationObserver(function (mutations) {
  if (document.querySelector(".burgerMasterClass")) {
    setTextContent(document.querySelector(".burgerMasterClass"), 3);
    observer.disconnect();
  }
});
const config = { attributes: true, childList: true, characterData: true };

observer.observe(navBar, config);
