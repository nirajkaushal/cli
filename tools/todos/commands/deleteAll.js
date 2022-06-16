const conf = new (require('conf'))();
const colorette = require("colorette");
const inquirer = require('inquirer');

function deleteAll() {

  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure you want to delete all tasks?',
    default: false,
  }]).then(answers => {
    if(answers.confirm) {
      conf.set('todoList', []);
      console.log(colorette.green(`\n All tasks deleted successfully. \n`));
    }
  }).catch(err => {
    console.log(colorette.red(`\n Error: ${err} \n`));
  })
}

module.exports = deleteAll;