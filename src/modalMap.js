const map = document.querySelector(".map");
// const info = document.querySelector(".info");
// const iframe = document.querySelector(".frame");

let active = false;

map.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!active) {
    active = true;
    map.classList.add("active");
    document.documentElement.style.overflowY = "hidden";
    return;
  }
  map.classList.remove("active");
  document.documentElement.style.overflowY = "initial";
  active = false;
});
