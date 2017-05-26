if (typeof require !== "undefined") {
  var Vector = require('./Vector');
}

class Drone {
  constructor () {
    this.power = false;
    this.position = new Vector(0, 0);
  }
}

if (typeof module !== "undefined") {
  module.exports = Drone;
}