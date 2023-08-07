

// Write a function that takes an array of numbers and returns the 
// largest (without using Math.max())

const arr = [-13, 40, 3, 0, 19, 22];
const arr1 = [6, 13, 250, 3];
const arr2 = [3,5,2,8,1];

function largest(a){
    let num = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
        num = a[i];
      }
    }
    return num;
  }
  
console.log(largest(arr));
// 40
console.log(largest(arr1)); 
// => 250
console.log(largest(arr2));
// => 8


// Write a function that takes an array of words and 
// a character and returns each word that has that character present.
const word = ["$hello!", "%%^%%", "test!"];
const word1 = ["#3", "$$$", "C%4!", "Hey!"];
const word2 = ["yellow", "green", "^up^", "down", "dog"];

const check = word.concat(word1,word2);
// console.log(check)

function list(check,char){
  for (let i = 0; i < check.length; i++){
    if(check[i].includes(char)){
    console.log(check[i])
    }
  }
}
list(word,"$hello")
list(word1,"!")
list(word2,"^")

// array and string method mix
// .includes

// // test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") 
// // => ["$hello!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
// // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))
// // => ["^up^"]



// Write a function that takes a num1 and num2 and 
// returns whether num1 is divisible by num2.

function num (num1,num2){
  if (num1 % num2 === 0){
  console.log("true")
 }
 if (num1 % num2 != 0){
  console.log("false")
 }
}
num (4,2)
num (9,3)
num (15,4)
// // test data
// console.log(isDivisible(4, 2)) 
// // => true
// console.log(isDivisible(9, 3)) 
// // => true
// console.log(isDivisible(15, 4)) 
// // => false
