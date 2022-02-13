const Engineer = require('../lib/Engineer')

test("getRole returns Engineer", () => {
    const test = "Engineer"
    const employee = new Engineer("lit", 1, "tt@gmail.com", "github")
    expect(employee.getRole()).toBe(test)
})

test("github username can be set", () => {
    const test = "KimKardashian"
    const employee = new Engineer("Kim", 1, "Kim@gmail.com", test)
    expect(employee.github).toBe(test)
})

test("getGithub returns the github user", () => {
    const test = "git";
    const e = new Engineer("huh", 1, "huh@gmail.com", test);
    expect(e.getGithub()).toBe(test);
  });
  

