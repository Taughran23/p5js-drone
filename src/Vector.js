class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  getLength () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  resize (scale) {
    return new Vector(
      this.x * scale, 
      this.y * scale
    );
  }
  add (v) {
    return new Vector(
      this.x + v.x,
      this.y + v.y
    );
  }
  sub (v) {
    return new Vector(
      this.x - v.x,
      this.y - v.y
    );
  }
}

if (typeof module !== "undefined") {
  module.exports = Vector;
}