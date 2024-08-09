function reverseString(str){
    return str.split('').reverse().join('').replaceAll(',' , '')
}

module.exports = reverseString