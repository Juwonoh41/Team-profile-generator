const getTeam = (team) => {
    const getManager = () => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.gName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.gId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.gEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.gOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }

}