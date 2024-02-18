const {Square, Circle, Triangle} = require('../lib/shapes');

describe('Square', () => {
  test('should render a square', () => {
    const mySquare = '<rect x="90" y="40" width="120" height="120" fill="blue"/>'

    const manifestSquare = new Square();
    manifestSquare.setColor('blue');
    expect(manifestSquare.render()).toEqual(mySquare);
  });
});

describe('Circle', () => {
  test('should render a circle', () => {
    const myCircle = '<circle cx="150" cy="100" r="80" fill="green"/>';

    const manifestCircle = new Circle();
    manifestCircle.setColor('green');
    expect(manifestCircle.render()).toEqual(myCircle);
  });
});

describe('Triangle', () => {
  test('should render a triangle', () => {
    const myTriangle = '<polygon points="150, 18 244, 182 56, 182" fill="red"/>';

    const manifestTriangle = new Triangle();
    manifestTriangle.setColor('red');
    expect(manifestTriangle.render()).toEqual(myTriangle);
  });
});