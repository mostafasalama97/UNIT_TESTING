const isPalindrome = require('./isPalindrome')

test('TacoCat returns true' , () => {
    expect(isPalindrome ("Tacocat")).toBe(true)
})

test('Dave returns false' , () => {
    expect(isPalindrome ("Dave")).toBe(false)
})