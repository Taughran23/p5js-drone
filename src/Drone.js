if (typeof require !== "undefined") {
  Vector = require('./Vector');
  Boundary = require('./Boundary');
}

class Drone {
  constructor (x=0, y=0) {
    this.power = false;
    this.position = new Vector(x, y);
    this.targetPosition = new Vector(x, y);
    this.size = 16;
    this.speed = 2;
    this.boundary = new Boundary(400, 400);
  }
  draw () {
    this.boundary.draw();
    let color = this.power ? 'green' : 'red';
    fill(color);
    stroke(255);
    strokeWeight(this.size / 4);
    ellipse(this.position.x, this.position.y, this.size);
    return this;
  }
  start () {
    this.power = true;
    return this;
  }
  shutdown () {
    this.power = false;
    return this;
  }
  move (dist, dir) {
    if (!this.power) return this;
    const movement = {
      'N': new Vector(0, -1),
      'S': new Vector(0, 1),
      'E': new Vector(1, 0),
      'W': new Vector(-1, 0)
    };
    this.step = movement[dir].resize(this.speed);
    this.targetPosition = this.boundary.check(this.position.add(movement[dir].resize(dist)));
    return this;
  }
  updatePosition () {
    if (this.position.isEqualTo(this.targetPosition)) return this;
    if (this.position.isWithinReach(this.targetPosition, this.step.getLength())) {
      this.position = this.targetPosition;
    } else  {
      this.position = this.position.add(this.step);
    }
    return this;
  }
}

if (typeof module !== "undefined") {
  module.exports = Drone;
}