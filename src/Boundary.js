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
  }
}

if (typeof module !== "undefined") {
  module.exports = Boundary;
}