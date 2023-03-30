/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


//WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/

const inquirer = require('inquirer'); //must be inquirer@7.3.3
const fs = require('fs');


const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation process:',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Provide any usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Describe any/all contributions made:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Describe any test methods used:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose all licenses that apply:',
      choices: [
        'MIT',
        'BSD',
        'GPL',
        'None',
      ],
    },
  ];
  
  function getLicenseInfo(license) {
    let badge = '';
    let notice = '';
  
    switch (license) {
      case 'MIT':
        badge =
          '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        notice = 'This project is licensed under the MIT License.';
        break;
      case 'BSD':
        badge =
          '[![License: BSD](https://img.shields.io/badge/License-BSD-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        notice = 'This project is licensed under the BSD License.';
        break;
      case 'GPL':
        badge =
          '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        notice = 'This project is licensed under the GNU General Public License v3.0.';
        break;
      case 'None':
        notice = 'This project is not licensed.';
        break;
      default:
        break;
    }
  
    return { badge, notice };
  }
  
inquirer.prompt(questions).then((answers)=>{
    console.log(answers);
})