const licenses = {
  "GNU GPL v3": {
    badge: "![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  "The MIT License": {
    badge: "![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link: "https://opensource.org/licenses/MIT"
  },  
  "Mozilla Public License 2.0": {
    badge: "![GitHub license](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    link: "https://opensource.org/licenses/MPL-2.0"
  },
  "IBM Public License Version 1.0": {
    badge: "![GitHub license](https://img.shields.io/badge/License-IPL%201.0-blue.svg)",
    link: "https://opensource.org/licenses/IPL-1.0"
  }  
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let message = '';
  if (license !== 'None') {
    message = licenses[license].badge;
    return message;
  } else {
    return message;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let message = '';
  if (license !== 'None') {
    message = licenses[license].link;
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

## Test
The application will be invoked by using the following command:
${data.test}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Video
[Video of README.md in action](https://drive.google.com/file/d/1rsuAMGVkiJ6gU7OlODPs4eVE1U7gBSEv/view)

## Questions
You can check my work on [GitHub](https://github.com/${data.github}) or can reach me by [email](${data.email})

`;
}

module.exports = generateMarkdown;
