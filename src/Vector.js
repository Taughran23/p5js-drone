class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  getLength () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

if (typeof module !== "undefined") {
  module.exports = Vector;
}