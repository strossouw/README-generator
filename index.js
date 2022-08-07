// TODO: Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input


const questions = [
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
    type: 'input',
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
    type: 'input',
    name: 'tech',
    message: `Input the technology used:`,
    validate: techInput => {
      if(techInput){
        return true;
      }
      else{
        console.log("Please select the technology use");
        return false;
      }
    }
  },
  {
    type: 'input',
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
    type: 'input',
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
    type: 'input',
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
    type: 'input',
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
    choices: ['MIT', 'LGPL 3.0', 'MPL 2.0', 'AGPL 3.0', 'GPL 3.0', 'Apache 2.0', 'Unlicense', 'None'],
  },
  {
    type: 'input',
    name: 'github',
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
      {
        type: 'list',
        message: 'Do you want a license document? ',
        name: 'licenseDoc',
        choices: ['Yes', 'No']
    },

];


//call the questions
const promptUser = () => {
  return inquirer.prompt(questions);
}


// TODO: Create a function to write README file

function writeToFile(data) {
  return new Promise((resolve, reject) => {
      fs.writeFile('./output/README.md', data, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'Readme file created!'
          })
      })
  })
};


// Function to initialize app

function init() {
  promptUser()
      .then(questions => {
          return generateReadme(questions);
      })
      .then(formattedPage => {
          return writeToFile(formattedPage);
      })
      .then(writeFileResponse => {
          console.log(writeFileResponse);
      })
      .catch(err => {
          console.log(err);
      })
};


//call to function
init();
