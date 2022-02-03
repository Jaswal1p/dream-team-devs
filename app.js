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
           type: 'input',
           name: 'employeeID',
           message: 'Enter your employee ID (Required)',
           validate: employeeId => {
               if (employeeId) {
                   return true;
               } else {
                   console.log('Please enter your employee ID');
                   return false;
               }
           }
       },
       {
           input: 'input',
           name: 'email',
           message: 'Enter your email address (Required)',
           validate: email => {
               if (email) {
                   return true;
               } else {
                   console.log('Please enter your email address');
                   return false;
               }
           }
       },
       {
           input: 'input',
           name: 'officePhone',
           message: 'Enter your office phone number (Required)',
           validate: officePhone => {
               if (officePhone) {
                   return true;
               } else {
                   console.log('Please enter your office phone number');
                   return false;
               }
           }
       },

    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officePhone);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            
        }
    ])
}


