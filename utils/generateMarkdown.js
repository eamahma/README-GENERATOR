// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let message = '';
    if (license !== 'None') {
    message = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return message;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let message = '';
  if (license !== 'None') {
    message = `https://img.shields.io/badge/license-${license}-blue.svg`;
    return message;
  }
  return message;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let message = '';
  if (license !== 'None') {
    message = `## License
    Appliction licensed under ${license} license. for further information refer to following link:`;
    return message;
  }
  return message;  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
 
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Test](#test)
- [Video](#video)
- [Questions](#questions)


## Installation
${data.installation}
  
## Usage
${data.usage}

## Contribution
${data.contribution}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Video
[Video of README.md in action](https://drive.google.com/file/d/1rsuAMGVkiJ6gU7OlODPs4eVE1U7gBSEv/view)

## Questions
You can check my work on GitHub https://github.com/${data.github} or can reach me by email ${data.email}

`;
}

module.exports = generateMarkdown;
