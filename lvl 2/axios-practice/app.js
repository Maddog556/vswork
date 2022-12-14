

//app.js

const axios = require("axios");

const lukeSkywalker = axios.get('https://swapi.co/api/people/1');

console.log(lukeSkywalker);

//old way to make a promise

// function assignResponseToVariable(response){
//     console.log(response.data);
// }

// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)


// To simplify this, we will usually see the function as an 
// anonymous function like this:

axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
})
