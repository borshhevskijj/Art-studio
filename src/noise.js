import { canvasBrg } from "./burgerMenu";
const canvasElArr = Array.from(document.getElementsByTagName("canvas"));

function resize(element, canvasContainer) {
  element.width = canvasContainer.getBoundingClientRect().width;
  element.height = canvasContainer.getBoundingClientRect().height;
}
function noise(ctx) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;
  for (; i < len; ) {
    // buffer32[i++] = ((85 * Math.random()) | 0) << 24;
    buffer32[i++] = ((135 * Math.random()) | 0) << 24;
    // buffer32[i++] = ((255 * Math.random()) | 0) << 24;
  }
  ctx.putImageData(idata, 0, 0);
}

export const drawing = (canvasArr) => {
  return canvasArr.map((canvasEl) => {
    let ctx = canvasEl.getContext("2d", { alpha: false });
    let canvasContainer = canvasEl.parentNode;
    resize(canvasEl, canvasContainer);
    noise(ctx);
  });
};
// IntersectionObserver
const options = {
  root: null,
  rootMargin: "65% 0px 65% 0px",
  threshold: 0.1,
};
const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const canvas = entry.target;
      drawing([canvas]);
      observer.unobserve(canvas);
    }
  });
};
const observer = new IntersectionObserver(callback, options);
canvasElArr.forEach((cnvs) => {
  observer.observe(cnvs);
});

// --------

// const navBar = document.querySelector(".navBar");

// const burgerMenuCanvasObs = new MutationObserver(function (entries) {
//   drawing([canvasBrg]);
//   burgerMenuCanvasObs.unobserve;
// });

// const config = {
//   attributes: true,
//   childList: true,
//   characterData: true,
// };
// burgerMenuCanvasObs.observe(navBar, config);
