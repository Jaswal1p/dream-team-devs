const Employee = require('../lib/Employee');

const employee = new Employee('Jaswal', '1357', 'Jaswal1p@yahoo.com');

test('test to see if we can get the constructor vlues of employee object', () => {
    expect(employee.name).toBe('Jaswal');
    expect(employee.id).toBe('1357');
    expect(employee.email).toBe('Jaswal1p@yahoo.com');
});

test('test to get a name from the getName() method', () => {
    expect(employee.getName()).toBe('Jaswal');
});

test('test to get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1357');
});

test('test to get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Jaswal1p@yahoo.com');
});

test('test to get employee role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});