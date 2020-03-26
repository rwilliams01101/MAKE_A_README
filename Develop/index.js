const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [];

function writeToFile(fileName, data) {}

function init() {
  inquirer
    // take user input for user name
    .prompt({
      message: "Enter your GitHub username:",
      name: "username"
    })
    .then(function({ username }) {
      axios.get(`https://api.github.com/users/${username}`).then(function(res) {
        console.log(res.data);
        var avatar = res.data.avatar_url;
        var email = res.data.email;
        console.log(`avatar ${avatar}`);
        console.log(`email ${email}`);

        fs.writeFile("log.md",`${username}![image of ${username}](${avatar})`, function() {
            if(err) {
                return console.log(err);
            }
        })
        

        // fs.appendFile('readme1.md', 'howdy', writeToFile(null, avatar));
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
