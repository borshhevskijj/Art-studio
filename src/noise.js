const canvas = document.getElementsByTagName("canvas");

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
    buffer32[i++] = ((135 * Math.random()) | 0) << 24;
  }
  ctx.putImageData(idata, 0, 0);
}

const drawing = () => {
  for (let i = 0; i < canvas.length; i++) {
    const canvasEl = canvas[i];
    var ctx = canvasEl.getContext("2d"),
      canvasContainer = canvasEl.parentNode;
    resize(canvasEl, canvasContainer);
    noise(ctx);
  }
};
drawing();

// window.onresize = resize(canvas[0], canvas[0].parentNode);
