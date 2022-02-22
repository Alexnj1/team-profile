const genEngineer = require("./gen-engineer");
const genIntern = require("../src/gen-intern");
const genManager = require("../src/gen-manager");

function generateHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
        <title>Team Profile</title>
    </head>
    <body>
        <header class="container-fluid gx-0 mb-5">
            <h1 class="text-center text-white bg-danger py-5">My Team</h1>
        </header>

        <main style="display: flex; justify-content: space-around; flex-wrap: wrap;">
            ${genManager(data)}
            ${genEngineer(data)}
            ${genIntern(data)}
        </main>
    </body>
    </html>`;
}

module.exports = generateHTML;
