// const { data } = require('browserslist')
const { data } = require('browserslist')
const inquirer = require('inquirer')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')
const genManager = require('../src/gen-manager')
const { BOLD_WEIGHT } = require('jest-matcher-utils')

function questions () {
    console.log(`
    ====================

     Enter Manager Info 

    ====================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message:"Manager's Name: "
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Employee Id: "
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email Address: '
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Manager's Office Number: "
        },
        {
            type: 'checkbox',
            name: 'teamChoices',
            message: 'Would you like to add an Engineer and/or Intern to your team?',
            choices: ['Engineer', 'Intern']
        }
    ]).then((data) => {
        console.log(data.teamChoices)
        if (data.teamChoices[0,1]) {
            return engineerAndIntern(data)
        } else if (data.teamChoices[0] === 'Engineer') {
            return engineerQuestions(data)
        } else if (data.teamChoices[0] === 'Intern') {
            return internQuestions(data)
        } 
    }).then((data) => {
        console.log(data)
    })
}

function engineerQuestions (data) {
    console.log('hi engineer')
    if (!data.engineers) {
        data.engineers = []
    }

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the engineer's name: "
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter their employee ID: '
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter their email address: '
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter their Github: '
        },
        {
            type: 'confirm',
            name: 'engineerConfirm',
            message: 'Would you like to enter another engineer?'
        }
    ]).then((eData) => {
        if (eData.engineerConfirm) {
            data.engineers.push(eData)
            return engineerQuestions(data)
        } else {
            data.engineers.push(eData)
            return data
        }
    })
}

function internQuestions (data) {
    console.log('hi 2')
    if (!data.intern) {
        data.intern = []
    }

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name: "
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter their employee ID: '
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter their email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter their school: '
        },
        {
            type: 'confirm',
            name: 'internConfirm',
            message: 'Would you like to enter another engineer?'
        }
    ]).then((iData) => {
        if (iData.internConfirm) {
            data.engineers.push(iData)
            return internQuestions(data)
        } else {
            data.engineers.push(iData)
            return data
        }
    })
}

function engineerAndIntern () {
    console.log('hello both')
}

module.exports = questions



// .then((data) => {
//     // console.log(data)
//     return new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
// }).then((managerData) => {
//     console.log(managerData)
//     console.log(genManager(managerData))
// }).then