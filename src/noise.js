// const ellipseContainer = document.querySelector(".blur");
// var canvas = document.getElementById("canvas"),
//   ctx = canvas.getContext("2d");
// function resize() {
//   canvas.width = ellipseContainer.clientWidth;
//   canvas.height = ellipseContainer.clientHeight;
// }
// resize();
// window.onresize = resize;

// function generate_noise(ctx) {
//   var w = ctx.canvas.width,
//     h = ctx.canvas.height,
//     idata = ctx.createImageData(w, h),
//     buffer32 = new Uint32Array(idata.data.buffer),
//     buffer_len = buffer32.length,
//     i = 0;

//   for (; i < buffer_len; i++) buffer32[i] = ((255 * Math.random()) | 0) << 24;

//   ctx.putImageData(idata, 0, 0);
// }

// generate_noise(ctx);
