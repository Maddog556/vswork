
//1. this is the most basic way of one exported module 
// const canBeAnyName = require("./math.js")

// const result = canBeAnyName(10,20)
// console.log(result)


//2.one way of multiple node modules
// const math = require("./math.js")

// console.log(math.sum(10,10))
// console.log(math.subtract(50,10))


//3. destructed object in const 
// const {sum,subtract} = require("./math.js")

// console.log(sum(30,30))
// console.log(subtract(5,10))