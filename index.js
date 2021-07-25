const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

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

const generateHTML = (answers) =>
`# ${answers.title}

 ## Description
 ${answers.description}

 ## Table of Contents
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contribution](#Contribution)
 - [Test](#test)
 - [License](#license)

 ## Installation
 ${answers.installation}
  
 ## Usage
 ${answers.usage}

 ## Contribution
 ${answers.contribution}

 ## License
 ${answers.license}
`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();