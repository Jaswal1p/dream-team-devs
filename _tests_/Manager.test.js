const Manager = require('../lib/Manager');

const manager = new Manager('Steve', '2468', 'Jaswal1p@yahoo.com', '800888008');

test('test to see if we can get the constructor vlues of manager object', () => {
    expect(manager.name).toBe('Steve');
    expect(manager.id).toBe('2468');
    expect(manager.email).toBe('Jaswal1p@yahoo.com');
});

test('test to get a name from the getName() method', () => {
    expect(manager.getName()).toBe('Steve');
});

test('test to get the id from the getId() method', () => {
    expect(manager.getId()).toBe('2468');
});

test('test to get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('Jaswal1p@yahoo.com');
});

test('test to get manager role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test to get manager phone number from the getRole() method', () => {
    expect(manager.getOfficePhone()).toBe('800888008');
});