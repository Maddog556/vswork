var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


// SPLITS INPUT TO ARRAY
const inputSplit = input.split("")

// ASSIGNS ASCII CODES FOR INPUTS
const inputToAscii = inputSplit.map((item) => (
  // charCodeAt returns an integer between 0 and 65535 with ASCII which is Short for American Standard Code for Information Interexchange 
    item.charCodeAt(0)
))

// CHECKS ASCII CODES APPLIES SHIFT 
// IF VALUE PASSED "Z" ALPHABET RESETS, ALL OTHER CHARS REMAIN SAME the number choice is to get lowercase of all letters
const shiftAscii = inputToAscii.map((item) => {
  if (item >= 97 && item <= 122 && (item + shift > 122)) {
    return (item - 26) + shift
  } else if (item >= 97 && item <= 122) {
    return item + shift
  } else {
    return item
  }
})

// ASSIGNS LETTERS TO ASCII CODES             String makes a string prototype  The prototype is a property available with all JavaScript objects. 
//                                              The prototype property allows you to add new properties and methods to strings
const asciiToAlpha = shiftAscii.map((item) => (String.fromCharCode(item)))

// JOINS ARRAY TO STRING W/O ,
const alphaToWords = asciiToAlpha.join("")

console.log(`CIPHER COMPLETE: ${alphaToWords}`)