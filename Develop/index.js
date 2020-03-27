const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

async function init() {
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
        name: "title"
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
    .then(function({ username, title, description, tableOfContents, installation, usage, contributing, questions, license, tests }) {
      
        axios.get(`https://api.github.com/users/${username}`).then(function(res) {

        var avatar = res.data.avatar_url;
        var email = "rwilliams01101@gmail.com";

      });
      
      writeFileAsync("README.md", `![image of ${username}](${avatar})` + "\n", function () {});
      appendFileAsync("README.md", "* " + `Email: [${email}](${email})` + "\n", function() {});
      appendFileAsync("README.md", `## Title` + "\n")
      appendFileAsync("README.md", "### " + title  + "\n", function() {});
      appendFileAsync("README.md", `## Description` + "\n")
      appendFileAsync("README.md", description  + "\n", function() {});
      appendFileAsync("README.md", `## Table of Contents` + "\n")
      appendFileAsync("README.md", "* " + tableOfContents  + "\n", function() {});
      appendFileAsync("README.md", `## Installation` + "\n")
      appendFileAsync("README.md", installation  + "\n", function() {});
      appendFileAsync("README.md", `## Usage` + "\n")
      appendFileAsync("README.md", "* " + usage  + "\n", function() {});
      appendFileAsync("README.md", `## License` + "\n")
      appendFileAsync("README.md", `![shields.io](https://camo.githubusercontent.com/5b17d82d9a87c80cdd019bacb35c23f3515d33c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d417061636865253230322e302d79656c6c6f77677265656e2e737667)`, function() {});
      appendFileAsync("README.md", "* " + license  + "\n", function() {});
      appendFileAsync("README.md", `## Contributing` + "\n")
      appendFileAsync("README.md", "* " + contributing  + "\n", function() {});
      appendFileAsync("README.md", `## Tests` + "\n")
      appendFileAsync("README.md", "* " + tests  + "\n", function() {});
      appendFileAsync("README.md", `## Questions` + "\n")
      appendFileAsync("README.md", "* " + questions  + "\n", function() {});
    });
}

init();

//
// get github info
// project title, description, tOc, instal, useage, license, contributing, tests, questions
// user github profile picture, user github email

// create new readme.md file
// populate readme with info from github
