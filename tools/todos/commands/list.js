const conf = new (require('conf'))();
const colorette = require("colorette");

const { green, red, yellow, greenBright, yellowBright, strikethrough, bold, italic, dim } = colorette;


function list({ showHidden }) {
  const todoList = conf.get('todoList', []);
  const message = conf.get('greeting', 'Hello developer!');
  let todoListFiltered = todoList;

  if(!showHidden) {
    todoListFiltered = todoList.filter(t => !t.hidden);
  }

  if(message) {
    console.log(bold(green(`\n${message}\n`)));
  }

  if(todoListFiltered.length === 0) {
    console.log(bold(red('Your TODO list is empty. To add a task, use the command ')));
    console.log(italic(yellowBright('\ntodos add <task>\n')));
    return;
  }

  console.log(bold(greenBright('Today\'s tasks:\n')));

  todoListFiltered.forEach((task, index) => {

    if(task.hidden) {
      console.log(dim(`${index + 1}. ${task.done ? strikethrough(task.text) : task.text}`));
    }
    else {
      if(task.done) {
        console.log(green(`${index + 1}. ${strikethrough(task.text)}`));
      } else {
        console.log(yellow(`${index + 1}. ${task.text}`));
      }
    }

    
  });
  console.log('\n')
}

module.exports = list