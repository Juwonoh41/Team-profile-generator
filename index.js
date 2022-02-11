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
                
            }
        ])
    }
}
