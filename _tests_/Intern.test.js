const Intern = require('../lib/Intern');

const intern = new Intern('Chamath', '100', 'Jaswal1p@yahoo.com', 'UCONN');

test('test to see if we can get the constructor vlues of intern object', () => {
    expect(intern.name).toBe('Chamath');
    expect(intern.id).toBe('100');
    expect(intern.email).toBe('Jaswal1p@yahoo.com');
});

test('test to get a name from the getName() method', () => {
    expect(intern.getName()).toBe('Chamath');
});

test('test to get the id from the getId() method', () => {
    expect(intern.getId()).toBe('100');
});

test('test to get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('Jaswal1p@yahoo.com');
});

test('test to get the school name from the getGithub() method', () => {
    expect(intern.getGithub()).toBe('Uconn');
});

test('test to get intern role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});