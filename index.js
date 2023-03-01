const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = [];

// Function to start the application
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the team manager's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email address:",
    },
    {
      type: 'input',
      name: 'officeN',
      message: "Enter the team manager's office number:",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeN,
    );
    teamMembers.push(manager);
    menu();
  });
}

function menu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'Add an engineer',
        'Add an intern',
        'Finish building my team',
      ],
    },
  ])
  .then((answers) => {
    switch (answers.choice) {
      case 'Add an engineer':
        addEngineer();
        break;  

      case 'Add an intern':
        addIntern();
        break;

      default:
        generateHtml(teamMembers);
      }
    }
  )
};

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the engineer's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the engineer's email address:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the engineer's GitHub username:",
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    teamMembers.push(engineer);
    menu();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the intern's employee ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the intern's email address:",
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the intern's school:",
    },
  ])
  .then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamMembers.push(intern);
    menu();
  });
}


function generateHtml(teamMembers) {
  const cardsHtml = teamMembers.map((member) => {
    let extraInfo = '';
    let extraLabel = '';
    
    if (member.getRole() === 'Engineer') {
      extraInfo = member.getGithub();
      extraLabel = 'GitHub';
    } else if (member.getRole() === 'Intern') {
      extraInfo = member.getSchool();
      extraLabel = 'School';
    } else if (member.getRole() === 'Manager') {
      extraInfo = member.getOfficeNumber();
      extraLabel = 'Office Number';
    }
    
    return `
    <div class="card">
      <div class="card-header">
        <h2>${member.getName()} ${member.icon}</h2>
        <h3>${member.getRole()}</h3>
      </div>
      <div class="card-body">
        <p>ID: ${member.getId()}</p>
        <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
        <p>${extraLabel}: ${extraInfo}</p>
      </div>
    </div>
    `;
  });
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Roster</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h1>My Team</h1>
      <div class="card-container">
        ${cardsHtml.join('')}
      </div>
    </body>
    </html>
    `;
    
    fs.writeFile('team.html', html, (err) => {
      if (err) throw err;
      console.log('Successfully generated team.html');
    });
}
  

// Call the startApplication function to start the application
init();