const Drone = require('../src/Drone');

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