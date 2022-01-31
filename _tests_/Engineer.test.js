const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Elon', '420', 'Jaswal1p@yahoo.com', 'Jaswal1p');

test('test to see if we can get the constructor vlues of engineerr object', () => {
    expect(engineer.name).toBe('Elon');
    expect(engineer.id).toBe('420');
    expect(engineer.email).toBe('Jaswal1p@yahoo.com');
});

test('test to get a name from the getName() method', () => {
    expect(engineer.getName()).toBe('Elon');
});

test('test to get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('420');
});

test('test to get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Jaswal1p@yahoo.com');
});

test('test to get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Jaswal1p');
});

test('test to get engineer role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
