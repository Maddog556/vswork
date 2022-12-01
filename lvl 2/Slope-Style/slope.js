


function collectAnimals(...animals) {
    return [...animals]
}

(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals)


function combineFruit(fruit,sweets,vegetables){
    return {fruit, sweets, vegetables}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])



    function parseSentence({location, duration}){
        return `We're going to have a good time in ${location} for ${duration}`
      }
      
    parseSentence({
     location: "Burly Idaho",
    duration: "2 weeks"
 });



function returnFirst(items){
        const {firstItem} = {items}[0]; /*change this line to be es6*/
        return firstItem
    }
    `"apple", "pear","cake", "pie","carrot"`
    

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    [firstFav] = arr
    secondFav = arr[1]
    thirdFav = arr[2]
    return `My top three favorite activities are,${firstFav},${secondFav}, and ${thirdFav}`;
}

(returnFavorites(favoriteActivities))


function combineAnimals(arr, ...rest) {
    return[arr,...rest]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  

  function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }
  

  function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]  