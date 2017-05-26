let d;

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(51);
  d = new Drone(width/2, height/2);
}

function draw () {
  background(51);
  d.updatePosition();
  d.draw();
}