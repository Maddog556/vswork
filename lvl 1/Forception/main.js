

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//make a new var of the two together
var newArr = forception(people, alphabet)

function forception(people, alphabet) {
    // your code here
    let newArr= []
    for (let i = 0; i < people.length; i++){
        newArr.push(people[i])
        for (let n = 0; n < alphabet.length; n++){
            newArr.push(alphabet[n])
        }
    }
    return newArr
} 

newArr.forEach(element => {
    console.log(element)
});
// Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
// "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
// "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
// "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
// "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L",
// "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
// "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
// "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
// "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
