var fs = require("fs")
var questions = require('../team-profile/src/questions')

function app () {
    return questions()
}

app()