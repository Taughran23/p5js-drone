const Vector = require('../src/Vector');

test('is a function', () => {
  expect(typeof Vector).toBe('function');
});

test('creates an instance of Vector', () => {
  let v = new Vector();
  expect(v instanceof Vector).toBe(true);
});

test('creates a vector with the specified coordinates', () => {
  let v = new Vector(1, 2);
  expect(v.x).toBe(1);
  expect(v.y).toBe(2);
});

test('#getLength returns the length of the vector', () => {
  let v = new Vector(3, 4);
  expect(v.getLength()).toBe(5);
});