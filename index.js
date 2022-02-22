var fs = require("fs");
var questions = require("../team-profile/src/questions");

questions();

function app(data) {
  fs.writeFile('../dist/index.html', data, (err) => {
        if (err) throw err
        else {
            console.log('Your team and webpage has been built! See dist/index.html for the webpage')
        }
    })
}

module.exports = app 

    