const { join } = require('path');
const { writeFile } = require('fs');

// This is a transfering the function from the other files to this file 
const { svgFormat } = require('./svgFormat');
const { promptShape } = require('./shapes');
const { promptColor } = require('./color');
const { promptText } = require('./text');

async function createSvgLogo(color, shape, text){  
  // await promptShape();
  // await promptColor();
  // await promptText();
  await svgFormat(color, shape, text);

  writeFile(join(__dirname, '../svgCreation', `${shape}.svg`), svgFormat, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
};

module.exports = { createSvgLogo };