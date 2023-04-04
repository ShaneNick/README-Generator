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
        {name : 'MIT', value: 'MIT'},
        {name : 'BSD', value: 'BSD'},
        {name : 'GPL', value: 'GPL'},
        {name : 'None', value: 'None'},
      ],
    },
    {
      type: 'input',
      name : 'githubUsername',
      message: 'Please type your username',
    },
    {
      type: 'input',
      name : 'email',
      message: 'Please enter your email', 
    },
  ];
  
  const badgeMaps = {
    MIT: 'img/download.png',
    BSD: 'img/bsdBadge.png',
    GPL: 'img/gplimg.png',
    None: 'img/noLicense.png'
  };
  
function getLicenseBadgeMarkdown(license) {
  const badgeFile = badgeMaps[license];
  if (badgeFile) {
    return `![${license} License](./img/${badgeFile})`;
  } else {
    return '';
  }
}

    //generate the README.md content
function generateReadmeContent(answers) {
  const licenseBadgeMarkdown = getLicenseBadgeMarkdown(answers.license);


  return `${licenseBadgeMarkdown}

## Project Title: 
${answers.title}

## Description:
${answers.description}

## Instalation:
${answers.installation}

## Usage:
${answers.usageInformation}

## License:
${licenseBadgeMarkdown}

This application is covered by the ${answers.license} license.

## Contributions:
${answers.contribution}

## test Instructions:
${answers.test}

## Questions:
If you have any questions, please contact me at ${answers.email}. You can also find me on GitHub at [${answers.githubUsername}](https://github.com/${answers.githubUsername}).
`;
}

// Prompt the user for input and generate the README.md file
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadmeContent(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md file generated successfully!');
});

