

// function sum(x, y){
//     // undo For else statment
//     // return x + y;
//   }

// const num = sum(1 , 2)
// const equal = 3

// if(num !== equal){
//     throw new Error(`TEST Failed : Expected ${equal}, but received ${num}`)
// }else{
//     console.log(`TES PASSED: ${equal} === ${num}`)
// }


function num1(x,y){
    return x + y;
}
    try{
        num1(1,y)
        throw "Use Numbers";
    }
    catch(err){
        console.log("Use Numbers")
    }
   

    var user = {username: "sam", password: "123abc"};
  
function login(username, password){
  if(username !== "sam"){
  throw "incorrect user"}
  if(password !== "123abc"){
    throw "incorrect user"}
}

try {
  login("sat", "123abc")
  console.log("success")
} catch(err){
  console.log("failed")
}