const inquirer = require('inquirer');

function promptText() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like to create?',
    },
  ]).then((answers) => {
    console.log(answers);
  }).catch((err) => {
    console.log(err);
  }); 
};

exports.promptText = promptText;