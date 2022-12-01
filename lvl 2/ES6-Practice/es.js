


const name = "John"
const age = 101

 let runForLoop = (pets) => {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//task 1 re-write .map() with =>
let carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = carrots.map((carrot) => {return {type: "carrot", name: carrot}
})
console.log(mapVegetables)

//task 2 re-write filter() with =>
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

 let filterForFriendly = people.filter((person) => person.friendly)

 console.log(filterForFriendly)


// re-write for => to work
let doMathSum = (a,b) =>  a + b
let produceProduct = (a, b) => a * b

console.log(doMathSum(5,5))
console.log(produceProduct(5,5))


let names = "Jacob";
let ages = 20;
//old way of doing it 
console.log("hello, my name is " + names + " and I am " + ages + " years old.");
//new way 
console.log(`hello, my name is ${names} and I am ${ages} years old.`);
