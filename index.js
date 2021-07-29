// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of classes for each question
const questions =[
  {
    'type': 'input',
    'name': 'title',
    'message': 'What is your project title?'
  },
  {
    'type': 'input',
    'name': 'description',
    'message': 'Enter description of the project?'
  },
  {
    'type': 'input',
    'name': 'installation',
    'message': 'Enter installation instructions?'
  },
  {
    'type': 'input',
    'name': 'usage',
    'message': 'What it is usage?'
  },
  {
    'type': 'input',
    'name': 'contribution',
    'message': 'What are contribution guidlines?'
  },
  {
    'type': 'input',
    'name': 'test',
    'message': 'How to test the application?'
  },
  {
    'type': 'list',
    'name': 'license',
    'message': 'How to test the application?',
    'choices': ["None", "GPL", "GNU", "Mozilla", "IBM"]
  },
  {
    'type': 'input',
    'name': 'github',
    'message': 'Enter your GitHub user id: '
  },
  {
    'type': 'input',
    'name': 'email',
    'message': 'Enter your email address: '
  }
];

const promptUser = () => {
   return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
        promptUser()
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();