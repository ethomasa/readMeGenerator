// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "UserName",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
    },
  
    {
      type: "input",
      message: "What is your project's name?",
      name: "Title",
    },
    {
      type: "input",
      message: "Please write a description of your project.",
      name: "Description",
    },
    {
      type: "checkbox",
      message: "What kind of licence should your project have ?",
      default: "Use arrow keys",
      name: "License",
      choices: [
        "MIT",
        "Apache 2.0",
        "Academic",
        "GPL 3.0",
        "None",
            
    ]
    },
    {
      type: "input",
      message: "What command should be run to install Dependencies?",
      name: "Dependencies",
      default:"npm i"
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "Test",
      default:"npm test"
    },
  
    {
      type: "input",
      message: "what does the user need to know about using the repo?",
      name: "Repoinfo",
    },
    {
      type: "input",
      message: "what does the user need to know about contributing to the repo",
      name: "Contributor",
    }
  ];
    


// TODO: Create a function to write README file
function writeToFile(fileName, data){
fs.writeFile("./"+fileName,data, function(err){
 

(err==true)? console.log(err): console.log ("Filename written sucessfully  "+ fileName);
    
})
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=> {
      writeToFile("ET_README.md", generatorMarkdown(data));
     
    })
  }


// Function call to initialize app
init();
