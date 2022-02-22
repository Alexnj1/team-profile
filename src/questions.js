const inquirer = require("inquirer");
const generateHTML = require("../src/generate-HTML.js");
const fs = require("fs");

function questions() {
  console.log(`
    ====================

     Enter Manager Info 

    ====================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Manager's Name: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Employee Id: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email Address: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Manager's Office Number: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an office number!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "teamChoices",
        message: "Would you like to add an Engineer or Intern to your team?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((data) => {
      if (data.teamChoices === "Engineer") {
        return engineerQuestions(data);
      } else if (data.teamChoices === "Intern") {
        return internQuestions(data);
      }
    })
    .then((data) => {
      return generateHTML(data);
    })
    .then((data) => {
      fs.writeFile("./dist/index.html", data, (err) => {
        if (err) throw err;
        else {
          console.log(
            "Your team and webpage has been built! See dist/index.html for the webpage"
          );
        }
      });
    });
}

function engineerQuestions(data) {
  if (!data.engineers) {
    data.engineers = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the engineer's name: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Enter their employee ID: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Email",
        message: "Enter their email address: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Github",
        message: "Enter their GitHub username: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a GitHub username!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "engineerConfirm",
        message: "Would you like to enter another engineer or add an intern?",
        choices: ["Engineer", "Intern", "Finish Team"],
      },
    ])
    .then((eData) => {
      data.engineers.push(eData);
      if (eData.engineerConfirm === "Engineer") {
        return engineerQuestions(data);
      } else if (eData.engineerConfirm === "Intern") {
        return internQuestions(data);
      } else {
        return data;
      }
    });
}

function internQuestions(data) {
  if (!data.interns) {
    data.interns = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the intern's name: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Id",
        message: "Enter their employee ID: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Email",
        message: "Enter their email address: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "School",
        message: "Enter their school: ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a school!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "internConfirm",
        message: "Would you like to enter another intern or add an engineer?",
        choices: ["Intern", "Engineer", "Finish Team"],
      },
    ])
    .then((iData) => {
      data.interns.push(iData);
      if (iData.internConfirm === "Intern") {
        return internQuestions(data);
      } else if (iData.internConfirm === "Engineer") {
        return engineerQuestions(data);
      } else {
        return data;
      }
    });
}

module.exports = questions;
