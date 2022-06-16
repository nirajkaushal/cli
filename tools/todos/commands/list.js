const conf = new (require('conf'))();
const colorette = require("colorette");

const { green, red, greenBright, yellowBright, strikethrough, bold, italic } = colorette;


function list() {
  const todoList = conf.get('todoList', []);
  const message = conf.get('greeting', 'Hello developer!');

  if(message) {
    console.log(bold(green(`\n${message}\n`)));
  }

  if(todoList.length === 0) {
    console.log(bold(red('Your TODO list is empty. To add a task, use the command ')));
    console.log(italic(yellowBright('\ntodos add <task>\n')));
    return;
  }

  console.log(bold(greenBright('Today\'s tasks:\n')));

  todoList.forEach((task, index) => {
    if(task.done) {
      console.log(strikethrough(green(`${index + 1}. ${task.text}`)));
    } else {
      console.log(colorette.yellow(`${index + 1}. ${task.text}`));
    }
  });
  console.log('\n')
}

module.exports = list