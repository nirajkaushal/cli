const conf = new (require('conf'))();
const colorette = require("colorette");
const inquirer = require('inquirer');

function deleteTasks({ tasks }) {
  let todoList = conf.get('todoList', []);
  const tasksNumber = tasks.map(t => parseInt(t)).filter(t => todoList.length >= t)
  
  if(todoList.length === 0) {
    console.log(colorette.red(`\n Error: You don't have any TODO task to delete \n`));
    return;
  }

  if(tasksNumber.length === 0) {
    console.log(colorette.red(`\n Error: You don't have any TODO task to delete \n`));
    return;
  }

  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: `Are you sure you want to delete ${tasksNumber.length} ${tasksNumber.length > 1 ? 'tasks' : 'task'}?`,
    default: false,
  }]).then(answers => {
    if(answers.confirm) {
      tasksNumber.forEach(task => {
        todoList.splice(task - 1, 1);
        conf.set('todoList', todoList);
      })
      console.log(colorette.green(`\n ${tasksNumber.length} ${tasksNumber.length > 1 ? 'tasks' : 'task'} deleted. \n`));
    }
  }).catch(err => {
    console.log(colorette.red(`\n Error: ${err} \n`));
  })
}

module.exports = deleteTasks;