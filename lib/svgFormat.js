const { promptShape } = require('./shapes');
const { promptColor } = require('./color');
const { promptText } = require('./text');




async function svgFormat(color, shape, text) {
  await promptShape();
  await promptColor();
  await promptText();

  return `<svg  version= "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <${shape} style="fill:${color} <text x="150" y="150" fill="white text-anchor="middle" font-size="60">${text}</text></svg>`
};

module.exports = { svgFormat };