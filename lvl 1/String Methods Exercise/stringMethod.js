
//create a string as a patameter and return the same 
//string in capital letters and then followed by lowercase
let letters = ("hello")
let upper = letters.toUpperCase()
let newLetter = upper.concat(letters)
console.log(newLetter)


//create a string and find the middle index and rounded down
let middleIndex = ("Hello World")
let index6 = middleIndex.indexOf("W")
console.log(index6)

//use a string method that uses slice() to return the first half of the string
let nameHalf = ("hello world")
// first one is what index you want to slice from first then where to end
let half = nameHalf.slice(0, 6)
console.log(half)


//funtion that takes a string and returns first half 
//upperCase and the second lower
let mixWord = ("hello world")
let mixhalf = mixWord.slice(0, 6)
let otherHalf = mixWord.slice(6)
let upperMix = mixhalf.toUpperCase()
let newMix = upperMix.concat(otherHalf)
console.log(newMix) 