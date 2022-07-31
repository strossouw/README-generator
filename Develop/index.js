// TODO: Include packages needed for this application
const generateReadme = require('./utils/generateReadme');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the project's title? (Required)",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project's title!");
          return false;
        }
      }
    },

  {
    type: 'editor',
    name: 'description',
    message: `Describe the project:`,
    validate: descriptionInput => {
      if(descriptionInput){
        return true;
      }
      else{
        console.log("Please enter a project description");
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'install',
    message: "Enter the installation instructions for the application:",
    validate: installInput => {
      if(installInput){
        return true;
      }
      else{
        console.log("Please enter the installation instructions");
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'usage',
    message: "How do you use your application? Enter the instructions here:",
    validate: useInput => {
      if(useInput){
        return true;
      }
      else{
        console.log("Please enter the instructions for how to use your application");
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'contribute',
    message: "How can other contribute your application? Enter the instructions here:",
    validate: contributeInput => {
      if(contributeInput){
        return true;
      }
      else{
        console.log("Write guidelines for contributions to the project");
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'test',
    message: "Are there any test instructions? Enter the instructions here:",
    validate: testInput => {
      if(testInput){
        return true;
      }
      else{
        console.log("Please enter any test instructions");
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What License is covered under the application?',
    choices: ['MIT', 'LGPL 3.0', 'MPL 2.0', 'AGPL 3.0', 'GPL 3.0', 'Apache 2.0', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'gitHub',
    message: "What is your Github user name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your Github user name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address? (Required)",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    }
  },


])};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
