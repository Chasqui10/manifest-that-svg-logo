class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}
function promptShape() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to create?',
      choices: ['Square', 'Circle', 'Triangle'],
    },
  ]).then((answers) => {
    if (answers.shape === 'Square') {
      return '<rect width="300" height="300" >';
    } 
    if (answers.shape === 'Circle') {
      return '<circle cx="150" cy="150" r="80" >';
    } 
    if (answers.shape === 'Triangle') {
      return '<polygon points="150,20 250,280 50,280" >';
    }

  }).catch((err) => {
    console.log(err);
  });
}; 
  exports.promptShape = promptShape;