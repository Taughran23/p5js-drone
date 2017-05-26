const Drone = require('../src/Drone');
const Vector = require('../src/Vector');

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