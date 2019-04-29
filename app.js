/* 

Display the options to the user like so:

*** What would you like to see? ***
1. Email
2. Calendar

*/

// laziness...
const l = console.log
// need readline to process user input
const readline = require('readline');
// when you require a module, it runs everything in the file. In this case, we will run the listEvents() function which will return the events
const calendar = require('./calendar')

displayLoginMenu()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PLANNER> '
});

rl.prompt();

rl.on('line', (line) => {
  const option = line.trim()
  
  // there are two options, '1', and '2'
  if (option === '1') {
    l('Option 1 selected')
  } else if (option === '2') {
    // display the user's calendar info
    l('Here are your events...')
    calendar.loadCalendar()
    l('End of options')
  } else {
    l(`${option} is not a valid option!`)
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


function displayLoginMenu() {
  l('*** What would you like to see? ***')
  l('| 1. Email')
  l('| 2. Calendar')
}


