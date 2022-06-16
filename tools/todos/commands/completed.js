const conf = new (require('conf'))();
const colorette = require("colorette");

function completed({ tasks = [] }) {
  const todoList = conf.get('todoList', []);
  const tasksNumber = tasks.map(t => parseInt(t)).filter(t => todoList.length >= t)

  if(todoList.length === 0) {
    console.log(colorette.red(`\n Error: You don't have any TODO task to mark as completed \n`));
    return;
  }

  if(tasksNumber.length === 0) {
    console.log(colorette.red(`\n Error: You don't have any TODO task to mark as completed \n`));
    return;
  }

  tasksNumber.forEach(task => {
    todoList[task - 1].done = true;
  })

  conf.set('todoList', todoList);

}

module.exports = completed;
