const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee.js");
jest.mock("../lib/Employee.js");

test("does manager return required info?", () => {
  const manager = new Manager("alex", "1", "alex@gmail.com", "2");

  expect(manager.getName()).toEqual("alex");
  expect(manager.getId()).toEqual("1");
  expect(manager.getEmail()).toEqual("alex@gmail.com");
  expect(manager.getOffice()).toEqual("2");
  expect(manager.getRole()).toEqual("Manager");
});
