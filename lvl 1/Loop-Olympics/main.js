

//1. Write a for loop that prints to the console the numbers 0 through 9.
//2. Write a for loop that prints to the console 9 through 0.
//3. Write a for loop that prints these fruits to the console.`

const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i =0; i < fruit.length; i++){
console.log(fruit[i])
}

 
//loop that goes thru 0-9
const num =[0,1,2,3,4,5,6,7,8,9]
for( var j = 0; j < num.length; j++){
console.log(num[j])
}
//loop that goes thru 9-0
for (var i = num.length - 1; i >= 0; i-- ){
  console.log(num[i])
}
// console.log 0-100 but only even numbers
 for(i=0; i<=100; i++){
  if(i % 2 == 0 ){
    console.log(i)
  }
 }
 
 const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
 ]
 //push 
let namesArray = []
let occupationsArray = []
for (let i = 0; i < peopleArray.length; i++){
  namesArray.push(peopleArray[i].name)
  occupationsArray.push(peopleArray[i].occupation)
}
console.log(namesArray)
console.log(occupationsArray)
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations


  //Create an array 
  //that mimics a grid like the following using nested for loops:
  var numbers = 3;
  var arr = [];
  for (let i = 0; i < numbers; i++) {
    arr[i] = [];
    for (let j = 0; j < numbers; j++) {
      arr[i][j] = 0;
    }
  }
  console.log(arr);