class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    gName(){
        return this.name
    }
    
    gId(){
        return this.id
    }

    gEmail(){
        return this.email
    }


}

module.export = Employee