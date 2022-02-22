const Manager = require("../lib/Manager");

function genManager(data) {
  var manager = new Manager(data.Name, data.Id, data.email, data.office);
  return `
        <div class="card rounded-3 shadow text-white mt-5 mb-3 px-0" style="max-width: 18rem; box-shadow: 10px, 10px, blue;">
            <div class="card-header rounded-top bg-primary">
                <h2>${manager.getName()}</h2>
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                  </svg>
                  ${manager.getRole()}
                </h5>
            </div>
            <div class="card-header text-black">
              <ul class="list-group list-group-flush my-4 border">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
              </ul>
            </div>
        </div>
    `;
}

module.exports = genManager;
