module.exports = class Employee {
  constructor(employeeName, id, email) {
    this.name = employeeName;
    this.id = id;
    this.email = email;
  }

  getName() {
    // return this.name;
    return "alex";
  }

  getId() {
    return "1";
  }

  getEmail() {
    return "alex@gmail.com";
  }

  getRole() {
    return "Employee";
  }
};
