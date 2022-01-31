const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //we have to call the parent (employee) function here for its properties and add unique intern properties.
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;