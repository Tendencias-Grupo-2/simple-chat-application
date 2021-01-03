const {add} = require('../src/math')

test("Should return 6", () =>{
    const re = add(1, 5)
    expect(re).toBe(6)
})
test("Should return 3", () =>{
    const re = add(1, 2)
    expect(re).toBe(3)
})