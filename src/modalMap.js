const map = document.querySelector(".map");
const mapWrapper = document.querySelector(".mapWrapper");
const info = document.querySelector(".info");
const iframe = document.querySelector(".frame");

// const fullscreen = getComputedStyle(map, "::after");
// console.log(fullscreen);
// fullscreen.onclick = () => {
//   console.log("qwe");
// };
let active = false;
map.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!active) {
    active = true;
    // map.classList.add("modalContainer");
    map.classList.add("active");
    document.documentElement.style.overflowY = "hidden";
  } else {
    // map.classList.remove("modalContainer");
    map.classList.remove("active");
    document.documentElement.style.overflowY = "initial";
    active = false;
  }
});
console.log(active);
// let fullscreen = document.querySelector("img");
// let button = document.querySelector("button");

// info.addEventListener("click", () => {
//   if (!document.fullscreenElement) {
//     info?.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// });
