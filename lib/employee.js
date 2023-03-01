// Libraries needed for this program
const inquirer = require('inquirer');

// Questions to be prompted
const questions = [
    {
        type: 'input',
        message: 'Which is the employee name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the employee id',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter the employee email',
        name: 'email',
    }
];

// Constructor functions that will store the team members
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.icon = '';
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;