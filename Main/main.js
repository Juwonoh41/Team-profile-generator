const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const employees = []
//function for various prompts

var addingEmployee = () => {
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
        inquirer.prompt([
            {
            type: "input",
            message: `The team member's select information ${extra}`,
            name: "extra"
        },
        {
            type: "list",
            message: "Continue?",
            choices: [
                "Y",
                "N"
            ],
            name: "addEmployee"
        }])
        .then(({addEmployee, extra}) => {
            let newEmpolyee 
            if(role === "Enginner"){
                newEmpolyee = new Engineer(name, id, email, extra)
            }
            if(role === "Intern"){
                newEmpolyee = new Intern(name, id, email, extra)
            }            
            if(role === "Manager"){
                newEmpolyee = new Manager(name, id, email, extra)
            }
            employees.push(newEmpolyee)
            employeeCard(newEmpolyee)
            .then(() => {
                if(addEmployee === "Y"){
                    addingEmployee()
                } else {
                    //need function for html
                    end()
                }
            })
        })
}

var webpage = () => {
    
    const frontHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
    </head>
    <body>
        <div class = "card-contianer">
            <div class = "employeeStuff">
         `
    fs.writeFile("./employee.html", frontHtml, (err)=>{
        if(err){
            return (err)
            console.log(err)
        }
        console.log("start")
    })
}

var employeeCard=(employee)=> {
    return new Promise((req, res) => {
        const name = employee.name
        const id = employee.id
        const email = employee.email
        const role = employee.role
        let info = ""
        if(role === "Engineer"){
            const github = employee.getGithub()
            info =  `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
            </ul>
            </div>
        </div>`
        }
        if(role === "Intern"){
            const school = employee.getSchool()
            info =  `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`
        }
        if(role === "Manager"){
            const office = employee.getOfficeNumber()
            info =  `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Number: ${office}</li>
            </ul>
            </div>
        </div>`
        }
        fs.appendFile("./employee.html", data, (err)=> {
            if(err){
                return res.status(500).json(err)
            }else{
                console.log("Success!")
            }
        })
    })
}

var end = () => {
    const endHtml = `
    </div>
    </div>
    
</body>
</html>
    `
    fs.appendFile("./employee.html", endHtml, (err)=> {
        if(err){
            return res.status(500).json(err)
        }else{
            console.log("Success!")
        }
    })
}

var startApp = () =>{
    webpage()
    addingEmployee()
}

startApp()
