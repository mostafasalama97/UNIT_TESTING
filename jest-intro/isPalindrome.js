const reverseString = require('./reverseString')
function isPalindrome(str){
    return str.toLowerCase() === reverseString(str).toLowerCase()
}

module.exports = isPalindrome