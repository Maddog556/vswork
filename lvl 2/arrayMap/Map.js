const number1 =[2, 5, 100];
const doubleNumber = number1.map(function(num){
    return num * 2
});
  console.log(doubleNumber); // [4, 10, 200]
  

  const number2 = [2, 5, 100];
  const stringNumber = number2.map(function(num){
    return num.toString();
  });
  console.log(stringNumber); // ["2", "5", "100"]
 

const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const newNames = capitalizeNames.map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }); 
  console.log(newNames); // ["John", "Jacob", "Jingleheimer", "Schmidt"] 
  

function namesOnly(arr){
    return arr.map(function(names){
        return names.name
    });
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
 
  
  function makeStrings(arr){
    return arr.map(function(num){
        if(num.age <= 17){
            return(num.name + "is under age")
        }else{
            return(num.name + "can got to the Matrix")
        }
    });
  }
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

  function readyToPutInTheDOM(arr){
    return arr.map(function(word){
        return "<h1>" + word.name + "</h1>" + "<h2>" + word.age + "</h2>";
    });
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
 