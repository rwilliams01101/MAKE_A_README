const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [];

function writeToFile(fileName, data) {}

function init() {
  inquirer
    // take user input for user name
    .prompt([
      {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
      },
      {
        type: "input",
        message: "What would you like to name your file?",
        name: "fileName"
      },
      {
        type: "input",
        message: "How would you describe your file?",
        name: "description"
      },
      {
        type: "checkbox",
        message: "Would you like a Table of Contents?",
        choices: [
            "[Installation](#installation)",
            "[Usage](#usage)",
            "[Credits](#credits)",
            "[License](#license)",
        ],
        name:"tableOfContents"
      },
      {
        type: "input",
        message: "How do you install your file?",
        name: "installation"
      },
      {
        type: "input",
        message: "Enter usage details",
        name: "usage"
      },
      {
        type: "list",
        message: "Please select your license",
        choices: [
            "MIT",
            "Apache",
            "GPL"
        ],
        name: "license"
      },
      {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributing"
      },
      {
        type: "input",
        message: "Are there any tests?",
        name: "tests"
      },
      {
        type: "input",
        message: "Please enter any questions you have for viewers of this README.",
        name: "questions"
      }
    ])
    .then(function({ username, fileName, description, tableOfContents, installation, usage, contributing, questions, license, tests }) {
      axios.get(`https://api.github.com/users/${username}`).then(function(res) {
        // console.log(res.data);
        var avatar = res.data.avatar_url;
        var email = res.data.email;

        fs.writeFile(
          "README.md",
          `![image of ${username}](${avatar})` + "\n",
          function() {
            // if(err) {
            //     return console.log(err);
            // }
          }
        );

        fs.appendFile("README.md", "* " + `Email: [${email}](${email})` + "\n", function() {});
        fs.appendFile("README.md", "# " + fileName  + "\n", function() {});
        fs.appendFile("README.md", "* " + description  + "\n", function() {});
        fs.appendFile("README.md", "* " + tableOfContents  + "\n", function() {});
        fs.appendFile("README.md", "* " + installation  + "\n", function() {});
        fs.appendFile("README.md", "* " + usage  + "\n", function() {});
        fs.appendFile("README.md", "* " + license  + "\n", function() {});
        fs.appendFile("README.md", "* " + contributing  + "\n", function() {});
        fs.appendFile("README.md", "* " + tests  + "\n", function() {});
        fs.appendFile("README.md", "* " + questions  + "\n", function() {});
        console.log(fileName, description, tableOfContents, installation, usage, license, contributing, tests, questions);
      });
    });
}

init();

//
// get github info
// project title, description, tOc, instal, useage, license, contributing, tests, questions
// user github profile picture, user github email

// create new readme.md file
// populate readme with info from github
