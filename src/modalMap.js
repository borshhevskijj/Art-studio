const map = document.querySelector(".map");
let isOpen = false;
map.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!isOpen) {
    isOpen = true;

    map.classList.add("active");
    document.documentElement.style.overflowY = "hidden";
    return;
  }
  map.classList.remove("active");
  document.documentElement.style.overflowY = "initial";
  isOpen = false;
});
