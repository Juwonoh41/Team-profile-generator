const Employee = require("../lib/Employee")

test("Can create a new Employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
})

test("Can set a number value for id", () => {
    const test = 2
    const employee = new Employee("Kim", test)
    expect(employee.id).toBe(test)
})

test("Can set the name value", () => {
    const test = "Kim"
    const employee = new Employee(test)
    expect(employee.name).toBe(test)
})

test("Can set the email value", () => {
    const test = "coolkids@gmail.com"
    const employee = new Employee("Kim", 2, test)
    expect(employee.email).toBe(test)
})

test("getId returns the id", () => {
    const test = 2
    const employee = new Employee("Kim", test)
    expect(employee.getId()).toBe(test)
})

test("getName returns the name", () => {
    const test = "Kim"
    const employee = new Employee(test)
    expect(employee.getName()).toBe(test)
})

test("getEmail returns the email", () => {
    const test = "coolkids@gmail.com"
    const employee = new Employee("Kim",2, test)
    expect(employee.getEmail()).toBe(test)
})

test("getRole returns the employee", () => {
    const test = "Employee"
    const employee = new Employee("Kim", 2, "kk@gmail.com")
    expect(employee.getRole()).toBe(test)
})
