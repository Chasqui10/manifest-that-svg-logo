const svgFormat = require('../lib/svgFormat');
const { Circle } = require('../lib/shapes');

test("Must render a 300 x 200 svg file", () => {
  const manifestSVG='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
    const svg2 = new svgFormat();
    expect(svg2.render()).toEqual(manifestSVG);
});

test("Checkinbg for text being appended", () => {
  const manifestSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="100" text-anchor="middle" font-size="60" fill="green">WAT</text></svg>';
  const svg2 = new svgFormat();
  svg2.setText('WAT', 'green');
  expect(svg2.render()).toEqual(manifestSVG);
});

test("should set the text and its color", () => {
  const manifestSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="100" text-anchor="middle" font-size="60" fill="red">WAT</text></svg>';
  const svg2 = new svgFormat();
  svg2.setText('WAT', 'red');
  expect(svg2.render()).toEqual(manifestSVG);
});


test("Test svgFormat class", () => {
  const manifestError = new Error("Text must not exceed 3 characters");
  const svg2 = new svgFormat();
  expect(() => svg2.setText('Hello', 'red')).toThrow(manifestError);
});

test("There must be a shape", () => {
  const manifestSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green"/><text x="150" y="100" text-anchor="middle" font-size="60" fill="white">SVG</text></svg>';

  const svg2 = new svgFormat();
  svg2.setText('SVG','white');
  const circle = new Circle();
  circle.setColor('green');
  svg2.setShape(circle);
  
  expect(svg2.render()).toEqual(manifestSVG);
  
});