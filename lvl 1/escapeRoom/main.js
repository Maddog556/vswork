const readline = require("readline-sync");
const name = readline.question("What is your name? ");
// need to tell the characater there options
// 1 is `put your hand in a hole` 2`find the key` or 3 `open the door`
// they cant open the door without the key and die if they put there hand in the wall

//set up win and loss conditions/variables

let keyFound = false;
let winCondition = false;
let endGame = false

//set up while/game loop (always set to true)

while (!endGame){

    //prompt user for stuff
    let options = ["Put hand in hole", "Search for key", "Open door"];
    let index = readline.keyInSelect(options, "What do you choose?");

    switch (index) {
        case 0:
            endGame = true;
            break;
        case 1:
            if (!keyFound){
                keyFound = true;
                console.log("You found a rusty key!\n")
            } else {
                console.log("There's only some dirty clothes, a locked door, and a hole in the floor\n")
            }
            break;
        case 2:
            if (!keyFound){
                console.log("Door is locked...\n")
            } else {
                console.log("You have unlocked the door!\n")
                winCondition = true;
                endGame = true;
            }
            break;
        default:
            console.log("You can't escape that way!")
    }
}

winCondition ? console.log("You win!") : console.log("You have died...")
    //either player finds key
    //or player dies
//print result of game