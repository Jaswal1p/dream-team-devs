const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //we have to call the parent (employee) function here for its properties and add unique engineer properties.
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;