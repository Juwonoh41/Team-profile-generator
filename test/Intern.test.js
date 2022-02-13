const Intern = require('../lib/Intern')

test("set school", () =>{
    const test = "UCSD"
    const employee = new Intern("huh", 1, "huh@gmail.com", test)
    expect(employee.school).toBe(test)
})

test("getRole returns Intern", () => {
    const test = "Intern"
    const employee = new Intern("huh", 1, "huh@gmail.com", test)
    expect(employee.getRole()).toBe(test)
})

test("getSchool returns school", () => {
    const test = "UCSD"
    const employee = new Intern("huh", 1, "huh@gmail.com", test)
    expect(employee.getSchool()).toBe(test)
})