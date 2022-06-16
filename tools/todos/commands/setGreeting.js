const conf = new (require('conf'))();
const colorette = require("colorette");

const { red, green, bold } = colorette;

function setGreeting(message) {

  if(!message) {
    console.log(red('\nPlease add a greeting message\n'));
    return;
  }

  conf.set('greeting', message);

  console.log(bold(green(`\n Greeting message added: ${message} \n`)));
}

module.exports = setGreeting