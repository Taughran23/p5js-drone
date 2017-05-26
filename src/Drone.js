class Drone {
  constructor () {
    this.power = false;
  }
}

if (typeof module !== "undefined") {
  module.exports = Drone;
}