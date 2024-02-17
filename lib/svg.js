const inquirer = require('inquirer');
const svgFormat = require('./svgFormat');
const { Square, Circle, Triangle  } = require('./shapes');
const { writeFile } = require('fs/promises');


class SVG {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message: "Type your text for your logo. Must not exceed 3 character's long.",
          validate: (text) => 
          text.length <= 3 || "Must not exceed not 3 character's long",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter your logo's text color",
        },
        {
          name: "shapeSelect",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["square", "circle", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        }
      ])
      .then (({ text, textColor, shapeSelect, shapeColor}) => {
        let shape;
        switch (shapeSelect) {
          case "square":
            shape = new Square();
            break;

          case "circle":
            shape = new Circle();
            break;

          case "triangle":
            shape = new Triangle();
            break;
        }
        shape.setColor(shapeColor);

        const svg1 = new svgFormat();
        svg1.setText(text, textColor);
        svg1.setShape(shape);
        return writeFile("./logo.svg", svg1.render());
      })
      .then(() => {
        console.log("Generated logo.svg was created");
      })
      .catch((error)=>{
        console.log(error);
      });
  }
}

module.exports = SVG;