const Boundary = require('../src/Boundary');
const Vector = require('../src/Vector');

// P5.js globals
global.width = 800;
global.height = 600;

describe('#constructor', () => {
  test('creates an instance of Boundary', () => {
    let b = new Boundary();
    expect(b instanceof Boundary).toBe(true);
  });

  test('sets #top #bottom #right and #left so that the boundary is centered on the screen', () => {
    let b = new Boundary(400, 400);
    expect(b.left).toBe(200);
    expect(b.top).toBe(100);
    expect(b.right).toBe(600);
    expect(b.bottom).toBe(500);
  });

  test('does not allow the dimensions of the boundary to be larger than the canvas', () => {
    let b = new Boundary(900, 700);
    expect(b.left).toBe(0);
    expect(b.top).toBe(0);
    expect(b.right).toBe(800);
    expect(b.bottom).toBe(600);
  });
});

describe('#check', () => {
  test('returns the passed vector if it is inside the boundary', () => {
    let b = new Boundary(400, 400);  // from (200, 100) to (600, 500)
    let v = new Vector(250, 250);
    expect(b.check(v)).toEqual(v);
  });
  test('returns a vector on the same line but on the right edge when the width is exceeded', () => {
    let b = new Boundary(400, 400);  // from (200, 100) to (600, 500)
    let v = new Vector(650, 250);
    expect(b.check(v)).toEqual(new Vector(600, 250));
  });
});