
const readline = require("readline-sync")
// Greet the player with a message
console.clear()
const lore = readline.keyIn("Hello Welcome to the world of Combat where you have to find and Defeat 5 enemies.Do you have what it takes ? hit space to continue ");
// must ask the players name a store it
console.clear()
const name = readline.question("What is Your name Warrior? ");
console.log("Hello " + name + "!");

// create the characters
let isAlive = true;
 function Player() {
   this.name = name;
   this.hp = 100;
   this.inventory = [];
}
let activePlayer = new Player();

 Player.prototype.printPlayer = function () {
    console.log(this.name, this.hp, this.inventory);
}

function Enemy ( enemyName,enemyHp,holdingItem){
    this.enemyName = enemyName;
    this.enemyHp = enemyHp;
    this.holdingItem = holdingItem;
}
// maybe here with let name
let activeEnemy = new Enemy();

const enemyCreation = ["Big Tim","little Bobby","Tiny Pinky","King Kung Fu"];
const items = ["Nice shoes","Cool hat","Belt of Warroirs","The Golden Key","Good pair of socks",];
let defeatedEnemy = [];

// every time the player walks use random algorithm will run to determine if a enemy appeared
   function random() { 
    return Math.floor(Math.random()* (20)+ 1);
   }
// Waliking
// walking console will ask the player to use "w" to walk 
console.clear()
let movement= readline.keyIn("to start press [w]",{limit:'$<w>'});
if (movement === "w"){
    choice();
}
function walk(){
    let probFight = Math.floor((Math.random()*10)+1);
    console.log(probFight)
    if(probFight > 4){
        battle();
    } else {
        walk();
    }
}
// the choices that you can make
function choice(){
    console.clear();
    let journey = readline.keyIn(`Choose one:\n(w) Walking.\n(i) Current Player.\n(q) Quit the Game. `,{limit:'$<w,i,q>'});

    if (journey === "i"){
       readline.keyInPause(activePlayer.printPlayer())
        walk(); 
    }
    else if (journey == "q"){
        console.log("You Have Ended the Game!")
        process.exit();
    }
    else if (journey == "w"){
        walk();
    }
}
// battle is the choise to run or fight 
function battle() {
    const randomEnemyName = enemyCreation[Math.floor(Math.random() * enemyCreation.length)];
    const randomItems = items[Math.floor(Math.random() * items.length)];
    let activeEnemy = new Enemy (randomEnemyName, 25, randomItems);
    console.log("The " + activeEnemy.enemyName+ " has attacked!!");
    let isFighting = true;
    fightRun = ["fight", "run"];
        while(isFighting){
            let action = readline.keyInSelect(fightRun, "Do you Fight " + activeEnemy.enemyName + " or do you run BUT BEWARE Running away isnt the Warroir way.");
            if (fightRun[action] === "fight"){
               activeEnemy.enemyHp -= random(25)
               isFighting = fight(activeEnemy, isFighting) 
            }
            else if (fightRun[action] === "run"){
             run();   
            }
        }
    }
// this is when the fight happens and adds iteams and/or removes hp 
function fight(activeEnemy, isFighting){
    console.clear();
    if (activeEnemy.enemyHp <= 0) {
        readline.keyInPause("You have beaten " + activeEnemy.enemyName + "!")
        activePlayer.hp += 10;
        // problem here
        // console.log(activeEnemy, "testing");
        // console.log("defeatedEnemy Arry",defeatedEnemy)
        defeatedEnemy.push(activeEnemy.enemyName);
        activePlayer.inventory.push(activeEnemy.holdingItem);  
        readline.keyInPause(
            "You found " + activeEnemy.holdingItem + " this looks valuable"
            );
        isFighting = !isFighting;
        win();
    } 
    if (activeEnemy.enemyHp > 0) {
        readline.keyInPause(activeEnemy.enemyName + " looking hurt " + activeEnemy.enemyHp + " health remaining");
     } 
     if (activePlayer.hp > 0) {
        activePlayer.hp -= random(20)
        readline.keyInPause("Fists to the face Do NOT feel good YOUR HP: " + activePlayer.hp);
     } 
     if (activePlayer.hp <= 0) {
         readline.keyInPause("You have Been Knocked out!!");
         isAlive = !isAlive
         process.exit();
     }
     return isFighting;
}
function run(){
    console.clear();
  let runAway = Math.floor((Math.random()*2)+1);
  if ( runAway !==1){
    readline.keyInPause("You can't run away they are to fast and you have been Knocked you out.");
    process.exit();
  }
  else {
    choice();
  }
}
function win(){
    // console.log(defeatedEnemy, "test");
    if(defeatedEnemy.length >= 5){
    readline.keyInPause("You have won the game Congratulations you are now King of all Warriors. ");
    process.exit();
    }
    else if(defeatedEnemy.length < 5){
     readline.keyInPause(defeatedEnemy + " this is who you have beaten so far");
        choice();
    }
} 
