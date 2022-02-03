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

    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header">
            ${engineer.name} <br/>
            <i class="fas fa-glasses"></i>Engineer</div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${engineer.id}</li>
             <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
             <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>     
        `;
        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 20rem;">
            <div class="card-header">
            ${intern.name} <br/>
            <i class="fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${intern.id}</li>
             <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
             <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>     
        `;
        html.push(internHtml);
    }

    // Now I created loop to go thru all employee choices

    for (let i= 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // all html sections to be joined
    return html.join('');
}

    // now we code for export function to generate entire page

module.exports = team => {

    return `
      <!DOCTYPE html>
      <html lang="en"> 


        <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="ie=edge">
           <title>Team Portfolio Generator</title>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
               integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
           <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="../dist/style.css">
        </head>

        <body>
            <header>
            <h1> My Team </h1>
            </header>

            <main> ${generateTeam(team)} </main>

        </body>    
        
      </html>
    `;

}



