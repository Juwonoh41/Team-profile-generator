const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const template = require("./src/genHtml")

const members = []
const id = []
console.log('npm reset will reset the html page')
const menu = () => {
    function manager(){
        console.log('Answer the questions to build the team.')
        inquirer.prompt([
            {
                type: 'input',
                name: 'managersName',
                message: "Enter the manager's name",
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Name must contain a character';
                  },
            },
            {
                type: 'input',
                name: 'managersId',
                message: "Enter the id number",
                validate: (answer) => {
                  const passed = answer.match(/^[1-9]\d*$/);
                  if (passed) {
                    return true;
                  }
                  return 'Number must be above 0';
                }, 
            },
            {
                type: 'input',
                name: 'managersEmail',
                message: "Enter the email",
                validate: (answer) => {
                  const passed = answer.match(/\S+@\S+\.\S+/);
                  if (passed) {
                    return true;
                  }
                  return 'Enter a valid email.';
                },
              },
              {
                type: 'input',
                name: 'managersOfficeNumber',
                message: "Enter the office number",
                validate: (answer) => {
                  const passed = answer.match(/^[1-9]\d*$/);
                  if (passed) {
                    return true;
                  }
                  return 'Number must be aboved zero';
                },
              },    
            
        ])
        .then((answers) => {
            const manager = new Manager(
              answers.managerName,
              answers.managerId,
              answers.managerEmail,
              answers.managerOfficeNumber
            );
            members.push(manager);
            id.push(answers.managerId);
            team();
          });
    }
    //adding team member card
function team(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberRole',
          message: 'Click on the role you wish to add.',
          choices: [
            'Engineer',
            'Intern',
            "I'm done.",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            engineer();
            break;
          case 'Intern':
            intern();
            break;
          default:
            done();
        }
      });
}

function engineer(){
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'eName',
          message: "Enter the name",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Must enter at least one character';
          },
        },
        {
            type: 'input',
            name: 'eId',
            message: "Enter the id",
            validate: (answer) => {
              const passed = answer.match(/^[1-9]\d*$/);
              if (passed) {
                if (id.includes(answer)) {
                  return 'Enter different number.';
                } else {
                  return true;
                }
              }
              return 'Enter a number higher then zero.';
            },
          },
          {
            type: 'input',
            name: 'eEmail',
            message: "Enter the email.",
            validate: (answer) => {
              const passed = answer.match(/\S+@\S+\.\S+/);
              if (passed) {
                return true;
              }
              return 'Enter a valid email';
            },
          },
          {
            type: 'input',
            name: 'eGithub',
            message: "Enter the github username",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Must have at least one character';
            },
          },
        ])
        .then((answer) => {
            const engineer = new Engineer(
              answer.eName,
              answer.eId,
              answer.eEmail,
              answer.eGithub
            );
            members.push(engineer);
            id.push(answers.engineerId);
            team();
          });
}
function intern(){
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'iName',
          message: "Enter the name",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Must contain at least one character';
          },
        },
        {
            type: 'input',
            name: 'iId',
            message: "Enter the id",
            validate: (answer) => {
              const passed = answer.match(/^[1-9]\d*$/);
              if (passed) {
                if (id.includes(answer)) {
                  return 'Enter different number';
                } else {
                  return true;
                }
              }
              return 'Number must be greater then zero.';
            },
          },
          {
            type: 'input',
            name: 'iEmail',
            message: "Enter the email",
            validate: (answer) => {
              const passed = answer.match(/\S+@\S+\.\S+/);
              if (passed) {
                return true;
              }
              return 'Email is invalid';
            },
          },
          {
            type: 'input',
            name: 'iSchool',
            message: "Enter the school",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Must contain at least one character';
            },
          },
        ])
        .then((answers) => {
            const intern = new Intern(
              answers.iName,
              answers.iId,
              answers.iEmail,
              answers.iSchool
            );
            members.push(intern);
            id.push(answers.internId);
            team();
          });

}
function done(){
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
      fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    }
  
    manager();
}

menu()