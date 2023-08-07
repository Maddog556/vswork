
const readline = require("readline-sync")

// please enter your first number (store that number)
var firstNumber = readline.questionInt("please enter your first number: ");

// please enter your second number (store that number)
var secondNumber = readline.questionInt("please enter your second number: ");

// please enter the operation to perform :add,sub,mul,div(then store the operation)
var enterOperator = readline.question("please enter the operation to perform :add,sub,mul,div ");

// function that adds 2 numbers and reurns the result
function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
// function that subtracts 2 numbers and returns the result
function subtractTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
// function that multpies two numbers and return the result
function multplyTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
// function the divide two numbers and return the result
function divideTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
//funtion defintions add, sub, mul, div of two numbers
function myCalculator(firstNumber, secondNumber, enterOperator){
    if (enterOperator == "add"){
        console.log("when You Add the First Number: " + firstNumber + " with the Second Number: " + secondNumber + " it gives you a result of: " +
        addTwoNumbers(firstNumber, secondNumber));
    }
    else if (enterOperator == "sub"){
        console.log("when You Subtract the First Number: " + firstNumber + " with the Second Number: " + secondNumber + " it gives you a result of: " +
        subtractTwoNumbers(firstNumber, secondNumber));
    }
    else if (enterOperator == "mul"){
        console.log("when You Multiply the First Number: " + firstNumber + " with the Second Number: " + secondNumber + " it gives you a result of: " +
        multplyTwoNumbers(firstNumber, secondNumber));
    }
    else if (enterOperator == "div"){
        console.log("when You divide the First Number: " + firstNumber + " with the Second Number: " + secondNumber + " it gives you a result of: " +
        divideTwoNumbers(firstNumber,secondNumber));
    }
}
myCalculator(firstNumber, secondNumber, enterOperator);

// each function will have 2 parameters num1,num2
// on the console the prompt wil print to the user
// based on the operation entered by the user,you will call one of your 
// 4 functions to perform the correct operation
// you will then print to the console:THE result is :[the result]