const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
    }
    role(){
        return "Intern"
    }
    
    gSchool(){
        return this.school
    }
}

module.exports = Intern