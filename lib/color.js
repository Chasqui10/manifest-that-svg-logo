const inquirer = require('inquirer');

// Create a prompt through inquirer to request what type of color the user wants to create
function promptColor() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'color',
      message: 'What color would you like to create?',
      choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White'],
    },
  ]).then((answers) => {
    console.log(answers);
  }).catch((err) => {
    console.log(err);
  });
};

exports.promptColor = promptColor;