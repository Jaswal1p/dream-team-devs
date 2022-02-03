const generateTeam = (team) => {
    console.log(team);
    // Have to create empty array to push html elements to and also to loop thru team objects.
    const html = [];

    // Next i created function for each type of employee in the team
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</dive>
            <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${manager.id}</li>
             <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
             <li class="list-group-item">Office Number: ${manager.officePhone}</li>
            </ul>
        </div>     
        `;
        html.push(managerHtml);
    }
}