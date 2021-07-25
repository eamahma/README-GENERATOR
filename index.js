// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter description of the project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What it is usage?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidlines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test the application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'How to test the application?',
        choices: ["A", "B", "C", "D"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub user id.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
  ]);
};

const generateREADME = (answers) =>
`# ${answers.title}

 ## Description
 ${answers.description}

 ## Table of Contents
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contribution](#Contribution)
 - [Test](#test)
 - [License](#license)
 - [GitHub](#github)
 - [Email](#email)

 ## Installation
 ${answers.installation}
  
 ## Usage
 ${answers.usage}

 ## Contribution
 ${answers.contribution}

 ## License
 ${answers.license}

 ## Github
 https://github.com/${answers.github}

 ## Email
 ${answers.email}
`;


// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
//const init = () => {
        promptUser()
    .then((answers) => writeToFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
//};

init();