const Drone = require('../src/Drone');
const Vector = require('../src/Vector');

// P5.js globals
global.width = 800;
global.height = 600;

test('is a function', () => {
  expect(typeof Drone).toBe('function');
});

test('creates an instance of Drone', () => {
  let d = new Drone();
  expect(d instanceof Drone).toBe(true);
});

test('newly created drones are turned off', () => {
  let d = new Drone();
  expect(d.power).toBe(false);
});

test('position should default to a (0, 0) Vector', () => {
  let d = new Drone();
  expect(d.position).toEqual(new Vector(0, 0));
});

describe('#power', () => {
  test('#start sets power to true', () => {
    let d = new Drone();
    expect(d.start().power).toBe(true);
  });
  test('#shutdown sets power to false', () => {
    let d = new Drone().start();
    expect(d.shutdown().power).toBe(false);
  });
});

describe('#move', () => {
  test('drone does not move if power is false', () => {
    let d = new Drone();
    expect(d.move(100, 'N').position).toEqual(new Vector(0, 0));
  });
  test('sets target to the correct vector accoriding to the provided distance and direction', () => {
    global.width = 100;
    global.height = 100;
    let d = new Drone().start();
    d.boundary.set(100, 100);
    expect(d.move(100, 'S').targetPosition).toEqual(new Vector(0, 100));
  });
  test('sets the step vector to the correct direction and a length of #speed', () => {
    global.width = 100;
    global.height = 100;
    let d = new Drone().start();
    d.boundary.set(100, 100);
    expect(d.move(100, 'E').step).toEqual(new Vector(d.speed, 0));
    expect(d.step.getLength()).toBe(d.speed);
  });
  test('does not set #targetPosition outside the boundary', () => {
    global.width = 100;
    global.height = 100;
    let d = new Drone(50, 50).start();
    d.boundary.set(100, 100);
    d.move(100, 'E');
    expect(d.targetPosition).toEqual(new Vector(100, 50));
  });
});

describe('#updatePosition', () => {
  test('does not update the position if the current position is equal to the target position', () => {
    let d = new Drone().start();
    d.move(100, 'S');
    d.position = new Vector(0, 100);
    d.updatePosition();
    expect(d.position).toEqual(new Vector(0, 100));
  });
  test('adds #step to #position if the current position is not equal to the target position', () => {
    expect();
    let d = new Drone().start();
    d.move(100, 'S');
    d.updatePosition();
    let expectedPositionY = d.step.getLength();
    expect(d.position).toEqual(new Vector(0, expectedPositionY));
  });
  test('when distance is not evenly divisible by #step, it does not move past the targetPosition (rounds the last step)', () => {
    global.width = 100;
    global.height = 100;
    let d = new Drone().start();
    d.boundary.set(100, 100);
    let dist = 53;
    d.move(dist, 'S');
    d.position = new Vector(0, dist - (d.step.getLength() - 1));
    d.updatePosition();
    expect(d.position).toEqual(new Vector(0, dist));
  });
});