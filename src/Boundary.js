if (typeof require !== "undefined") {
  Vector = require('./Vector');
}

class Boundary {
  constructor (w=width, h=height) {
    w = w > width ? width : w;
    h = h > height ? height : h;
    this.w = w;
    this.h = h;
    this.offset = new Vector(
      (width - w) / 2,
      (height - h) / 2
    )
  }
  draw () {
    noFill();
    rect(this.offset.x, this.offset.y, this.w, this.h);
  }
}

if (typeof module !== "undefined") {
  module.exports = Boundary;
}