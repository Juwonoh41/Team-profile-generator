
const getTeam = (team) => {

    const getManager = (m) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${m.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${m.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${m.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${m.getEmail()}">${m.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${m.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    const getIntern = (i) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${i.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${i.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${i.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${i.getEmail()}">${i.getEmail()}</a></li>
                <li class="list-group-item">School: ${i.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
    const getEngineer = (e) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${e.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${e.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${e.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></li>
                <li class="list-group-item">github: ${e.getGithub()}</li>
            </ul>
        </div>
    </div>`
    }
    const page = []

    page.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => getManager(manager)))

    page.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => getEngineer(engineer)).join(""))
    
    page.push(team.filter(employee =>employee.getRole() === "Intern")
    .map(intern => getIntern(intern)).join(""))
}

module.exports = (members) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 heading">
                <h1 class="text-center" >Team</h1>
            </div>
        </div>
    </div>
    <div class = "card-container">
        <div class = "row">
            <div class="team-member-card col-12 d-flex justify-content-center">
            ${getTeam(members)}
            </div>
        </div>
    </div>
    </body>
    `
}