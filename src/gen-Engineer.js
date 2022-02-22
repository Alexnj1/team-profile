const Engineer = require("../lib/Engineer");

function genEngineer(data) {
  var e = [];
  if (!data.engineers) {
    return "";
  } else {
    for (i = 0; i < data.engineers.length; i++) {
      var engineer = new Engineer(
        data.engineers[i].Name,
        data.engineers[i].Id,
        data.engineers[i].Email,
        data.engineers[i].Github
      );
      e.push(`
            <div class="card rounded-3 shadow text-white mt-5 mb-3 px-0" style="max-width: 18rem; box-shadow: 10px, 10px, blue;">
                <div class="card-header rounded-top bg-primary">
                    <h2>${engineer.getName()}</h2>
                    <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                    </svg>
                    ${engineer.getRole()}
                    </h5>
                </div>
                <div class="card-header text-black">
                <ul class="list-group list-group-flush my-4 border">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a target="_blank" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github Profile: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
                </div>
            </div>
        `);
    }
    return e.join("");
  }
}

module.exports = genEngineer;
