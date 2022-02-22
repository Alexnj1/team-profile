const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee.js");
jest.mock("../lib/Employee.js");

test("does engineer return required info?", () => {
  const engineer = new Engineer("alex", "1", "alex@gmail.com", "alexnj1");

  expect(engineer.getName()).toEqual("alex");
  expect(engineer.getId()).toEqual("1");
  expect(engineer.getEmail()).toEqual("alex@gmail.com");
  expect(engineer.getGithub()).toEqual("alexnj1");
  expect(engineer.getRole()).toEqual("Engineer");
});
