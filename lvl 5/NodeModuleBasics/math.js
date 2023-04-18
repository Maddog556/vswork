
//1. this is the most basic way of one exported module 
// function sum(a,b){
//     return a + b
// }

// module.exports = sum


function sum(a,b){
    return a + b
}
function subtract(a,b){
    return a-b
}
//  object destructed
// module.exports = {
//     sum:sum,
//     subtract:subtract
// }

//object literals
module.exports = {sum,subtract}