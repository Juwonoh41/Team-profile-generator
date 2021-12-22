const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const employees = []

var addingMember = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the employee name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee username"
        },
        {
            type: "list",
            name: "role",
            message: "Select employee's role",
            choices: ["Engineer",
            "Intern",
            "Manager"]
        }])
        .then(({name, id, email, role}) => {
            let extra = "";
            if(role === "Engineer"){
                extra = "Github"
            }
            if(role === "Intern"){
                extra = "place of learning"
            }else {
                extra = "phone number"
            }
        })
}