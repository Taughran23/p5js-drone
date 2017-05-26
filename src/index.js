let d;

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(51);
  d = new Drone();
}

function draw () {
  background(51);
  d.updatePosition();
  d.draw();
}