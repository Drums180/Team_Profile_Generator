# Team_Profile_Generator

 ## Criteria 1:Prompt for the team information

In this code, the init() function uses the inquirer.prompt() method to prompt the user for information about the team's manager. This information is stored in the manager object.

Then, a Team object is created using the information provided by the user for the manager.

Next, a while loop is used to prompt the user for information about additional employees. The user is presented with a list of roles to choose from, and based on their selection, they are prompted for information specific to that role. Once the user has provided information for an employee, a new employee object is created using the information provided and added to the Team object.

The loop continues until the user chooses not to add any more employees.

Finally, the Team object is passed to the render() function to generate an HTML file with the team's information, which is then written to a file using the fs.writeFile() method.

```
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
```

## Criteria 2: Test Evaluation
In the team roster generator, the tests are run using the Jest testing framework. The tests are located in the test folder and are written in JavaScript files with the .test.js extension.

To run the tests, you need to open your terminal or command prompt, navigate to the project directory, and then run the following command:

```
npm run test
```

This will run all the tests in the test folder and output the results to the terminal.

```
> jest

 PASS  tests/intern.test.js
 PASS  tests/engineer.test.js
 PASS  tests/employee.test.js
 PASS  tests/manager.test.js

Test Suites: 4 passed, 4 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        0.533 s, estimated 1 s
```

## Criteria 3: Generate File
After the user has provided the necessary information through the prompts, a new file is created and the data is dynamically inserted into an HTML template.

Here is a snippet of code that shows how this is accomplished:

```
function generateHtml(team) {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  </head>
  <body>
      <nav class="navbar navbar-dark bg-danger mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
      </nav>
      <div class="container">
          <div class="row">
              ${generateCards(team)}
          </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </body>
  </html>`;

  fs.writeFile('team.html', html, (err) => {
    if (err) throw err;
    console.log('The team.html file has been generated!');
  });
}
```
In this code, the generateHtml function is called with the team array as an argument, which contains the data for all the team members. The html variable is a string that contains an HTML template with placeholders for the data.

The generateCards function is a helper function that generates HTML cards for each team member. It takes the team array as an argument and uses a forEach loop to generate a card for each team member. The cards are then concatenated together and returned as a string.

After the HTML template has been generated and the team.html file has been written, a message is logged to the console to confirm that the file has been generated successfully.
<img width="1442" alt="Captura de pantalla 2023-03-02 a la(s) 11 44 30" src="https://user-images.githubusercontent.com/118247139/222509407-972e2bf3-1a9f-4de2-b953-def52f50ceb6.png">


Walkthrough video 
https://youtu.be/VptVpzCwASs
