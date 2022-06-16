const conf = new (require('conf'))();
const colorette = require("colorette");

const { red, green, italic } = colorette;

function add(task) {

  let todoList = conf.get('todoList', []);

  if(todoList.filter(t => t.text === task).length > 0) {
    console.log(red(`\n Error: Task "${italic(task)}" already exists \n`));
    return;
  }

  todoList.push({
    text: task,
    done: false
  });

  conf.set('todoList', todoList);
  console.log(green(`\n New task added successfully. \n`));

}

module.exports = add;