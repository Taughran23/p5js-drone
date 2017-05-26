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

describe('#getLength', () => {
  test('returns the length of the vector', () => {
    let v = new Vector(3, 4);
    expect(v.getLength()).toBe(5);
  });
});

describe('#resize', () => {
  test('returns a vector multiplied by the provided number', () => {
    let v = new Vector(1, 2);
    expect(v.resize(2)).toEqual(new Vector(2, 4));
  });
});

describe('#add', () => {
  test('returns a vector with components equal to the sum of the current vector plus the provided vector', () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    expect(a.add(b)).toEqual(new Vector(4, 6));
  });
});


describe('#sub', () => {
  test('returns a vector equal to difference between the vector and the provided vector', () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    expect(a.sub(b)).toEqual(new Vector(-2, -2));
    expect(b.sub(a)).toEqual(new Vector(2, 2));
  });
});

describe('#isEqualTo', () => {
  test('returns true if the current vector has the same components as the provided one', () => {
    let a = new Vector(1, 2);
    let b = new Vector(1, 2);
    expect(a.isEqualTo(b)).toBe(true);
  });

  test('returns false if the current vector does not have the same components as the provided one', () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    expect(a.isEqualTo(b)).toBe(false);
  });
});

describe('#isWithinReach', () => {
  test('returns true if the distance between the vector and the target vector is less than the provided distance', () => {
    let a = new Vector(2, 0);
    let b = new Vector(4, 0);
    let target = new Vector(3, 0);
    let dist = 1.5;
    expect(a.isWithinReach(target, dist)).toBe(true);
    expect(b.isWithinReach(target, dist)).toBe(true);
  });
});

describe('#dist', () => {
  test('returns the distance (absolute) between the vector and the provided vector', () => {
    let a = new Vector(0, 0);
    let b = new Vector(3, 4);
    expect(a.getDistance(b)).toBe(5);
    expect(b.getDistance(a)).toBe(5);
  });
});