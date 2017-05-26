const Boundary = require('../src/Boundary');
const Vector = require('../src/Vector');

// P5.js globals
global.width = 800;
global.height = 600;

describe('#constructor', () => {
  test('creates an instance of Boundary with the specivied (w, h)', () => {
    let b = new Boundary(360, 240);
    expect(b instanceof Boundary).toBe(true);
    expect(b.w).toBe(360);
    expect(b.h).toBe(240);
  });

  test('#offset is automatically set to center the boundary on the canvas', () => {
    let b = new Boundary(400, 400);
    expect(b.offset).toEqual(new Vector(200, 100));
  });

  test('does not allow the dimensions of the boundary to be larger than the canvas', () => {
    global.width = 800;
    global.height = 600;
    let b = new Boundary(900, 700);
    expect(b.w).toBe(800);
    expect(b.h).toBe(600);
    expect(b.offset).toEqual(new Vector(0, 0));
  });
});
