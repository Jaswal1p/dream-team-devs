const inquirer = require('inquirer');

const fs = require("fs");

const Manager = require('./lib/Manager');

const Intern = require('./lib/Intern');

const Engineer = require('./lib/Engineer');

const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'What is your name? (Required)',
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter your name!');
                   return false;
               }
           }
       },
       {
           
       }

    ])
}
