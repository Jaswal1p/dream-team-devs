const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        //we have to call the parent (employee) function here for its properties and add unique manager properties.
        super(name, id, email);

        this.officePhone = officePhone;
    }

    getOfficePhone() {
        return this.officePhone;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;