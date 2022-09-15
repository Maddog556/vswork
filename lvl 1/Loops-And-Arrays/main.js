
//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for ( var i =0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        console.log(officeItems[i])
    }
}

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var movieSeers = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for ( var i =0; i < movieSeers.length; i++){
    if (movieSeers[i].age < 18 ){
        console.log( " not old enough" )
    } else if (movieSeers[i].age > 18){
      console.log( "old enough")
    }
}
  