if (typeof require !== "undefined") {
  Vector = require('./Vector');
}

class Boundary {
  constructor (boundaryWidth=width, boundaryHeight=height) {
    boundaryWidth = boundaryWidth > width ? width : boundaryWidth;
    boundaryHeight = boundaryHeight > height ? height : boundaryHeight;
    this.top = (height - boundaryHeight) / 2;
    this.left = (width - boundaryWidth) / 2;
    this.right = boundaryWidth + this.left;
    this.bottom = boundaryHeight + this.top;
  }
  draw () {
    noFill();
    rect(this.left, this.top, this.right - this.left, this.bottom - this.top);
  }
  check (pos) {
    if (pos.x > this.right) return new Vector(this.right, pos.y);
    if (pos.x < this.left) return new Vector(this.left, pos.y);
    if (pos.y > this.bottom) return new Vector(pos.x, this.bottom);
    if (pos.y < this.top) return new Vector(pos.x, this.top);
    return pos;
  }
}

if (typeof module !== "undefined") {
  module.exports = Boundary;
}