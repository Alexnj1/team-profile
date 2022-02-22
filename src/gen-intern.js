const Intern = require("../lib/Intern");

function genIntern(data) {
  var int = [];
  if (!data.interns) {
    return "";
  } else {
    for (i = 0; i < data.interns.length; i++) {
      var intern = new Intern(
        data.interns[i].Name,
        data.interns[i].Id,
        data.interns[i].Email,
        data.interns[i].School
      );
      int.push(`
            <div class="card rounded-3 shadow text-white mt-5 mb-3 px-0" style="max-width: 18rem; box-shadow: 10px, 10px, blue;">
                <div class="card-header rounded-top bg-primary">
                    <h2>${intern.getName()}</h2>
                    <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                    </svg>
                    ${intern.getRole()}
                    </h5>
                </div>
                <div class="card-header text-black">
                <ul class="list-group list-group-flush my-4 border">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a target="_blank" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">College/University: ${intern.getSchool()}</li>
                </ul>
                </div>
            </div>
            `);
    }
    return int.join("");
  }
}

module.exports = genIntern;
