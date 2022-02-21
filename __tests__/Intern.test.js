const Intern = require('../lib/Intern.js')
const Employee = require('../lib/Employee.js')
jest.mock("../lib/Employee.js")


test ('does engineer return required info?', () => {
    const intern = new Intern('UM')

    expect(intern.getName()).toEqual('alex')
    expect(intern.getId()).toEqual('1')
    expect(intern.getEmail()).toEqual('alex@gmail.com')
    expect(intern.getSchool()).toEqual('UM')
    expect(intern.getRole()).toEqual('Intern')
})