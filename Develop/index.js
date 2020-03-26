const axios =require('axios');
const util =require('util');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {
    axios
    .get("https://api.github.com/users/rwilliams01101")
    .then(function(res) {
        console.log(res.data);
    })
}

init();

// take user input for user name
    //
// get github info
    // project title, description, tOc, instal, useage, license, contributing, tests, questions
    // user github profile picture, user github email

// create new readme.md file
// populate readme with info from github
