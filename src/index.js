let c = 0;

function draw() {
  document.documentElement.style.setProperty("--direction", c++ + "deg");
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
