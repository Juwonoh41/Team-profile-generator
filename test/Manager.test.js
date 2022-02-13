const Manager = require('../lib/Manager')

test("office number is set", ()=> {
    const test = 4
    const employee = new Manager('huh', 2, 'huh@gmail.com', test)
    expect(employee.officenumber).toBe(test)
})

test("getRole returns manager", () => {
    const test = "Manager"
    const employee = new Manager('huh', 1, 'huh@gmail.com', 4 )
    expect(employee.getRole()).toBe(test)
})

test("getOfficeNumber returns the office number", ()=> {
    const test = 4
    const employee = new Manager('huh', 1, 'huh@gmail.com', test)
    expect(employee.getOfficeNumber()).toBe(test)
})