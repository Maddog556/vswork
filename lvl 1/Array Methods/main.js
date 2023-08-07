var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.
let reLast = vegetables.pop()
console.log(reLast)

// 2. Remove the first item from the fruit array.
let reFirst = fruit.shift()
console.log(reFirst)

// 3. Find the index of "orange."
let orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

// 4. Add that number to the end of the fruit array.
fruit.push(orangeIndex)

// 5. Use the length property to find the length of the vegetable array.
let length = fruit.length
console.log(length)

// 6. Add that number to the end of the vegetable array.
vegetables.push(length)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".with The concat() method concatenates (joins) two or more arrays.
const foods = fruit.concat(vegetables)
console.log(foods)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
foods.splice(4,2)

// 9. Reverse your array.
var rev = foods.reverse()
console.log(rev)

// 10. Turn the array into a string and return it.
let dif = foods.toString()
console.log(dif)
//3,pepper,1,watermelon,orange,apple this is the goal