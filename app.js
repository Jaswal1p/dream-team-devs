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
           type: 'input',
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
           type: 'input',
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
            type: 'list',
            name: 'menu',
            message: 'Please select the position of employee you would like to add to this team:',
            choices: ['add an engineer', 'add an intern', 'dream team is now complete!']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();    

        }
    });
};

const promptEngineer = () => {
    console.log(`
    ==================
    Add New Engineer
    ===================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter engineer employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter engineer employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter engineer email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "Enter engineer's Github username. (Required)",
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log("Please enter engineer's github username");
                    return false;
                }
            }
        }
    ])
    .then(answers => { 
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })    
};

const promptIntern = () => {
    console.log(`
    ===============
    Add New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter intern's employee ID (Required)",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Please enter intern's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email address (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter intern's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school. (Required)",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter intern's school");
                    return false;
                }
            }
        }
    ])
    .then(answers => { 
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })    
};

const buildTeam = () => {
    console.log(`
    ===========================
    Dream team is now complete!
    ===========================
    `);

    // now i am creating output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();
