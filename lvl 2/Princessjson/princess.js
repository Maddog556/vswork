
class Player {
constructor(name, totalCoins, status, hasStar){
    this.name = name 
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameAtive = true;
    this.setName = this.name;
    this.setPlayer()
    this.printOut()
    }

    setPlayer(){
        if(this.setName !== 'Mario' || this.setName !== 'Luigi'){
        let randomNum = Math.floor(Math.random() * 2)
        if(randomNum !== 1){
           this.name = 'Mario'
        }
        else{
           this.name = 'Luigi'
        }
      }
    }
    printOut() {
        console.log(
        `
       Name:${this.name}
       TotalCoins:${this.totalCoins}
       Status:${this.status}
       Has Star:${this.hasStar}
       `)
    }
    gotHit(){
        if(this.status === 'PowerUp' && this.hasStar === true){
            this.hasStar = false
            this.status = 'PowerUp'
            console.log('The star has Blocked You')
        }else if(this.status === 'PowerUp' && this.hasStar === false){
            this.status ='big'
        }else if(this.status === 'big'){
            this.status = 'small'
        }else if(this.status === 'small'){
            this.status = 'dead'
            this.gameAtive = false
            clearInterval(intervalID)
            console.log('You have Died')
        }
    }
    gotPowerup(){
        if(this.status === 'small'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'PowerUp'
        }else if(this.status === 'PowerUp'){
            this.hasStar = true
        }else if(this.status ==='PowerUp' && this.hasStar === true){
            console.log('You are already All Powerful')
        }
    }
    winner(){
        if(this.totalCoins === 5){
            this.gameAtive = false
            clearInterval(intervalID)
            console.log('You have found 5 coins')
        }
    }
    gotCoin(){
        this.totalCoins ++
        console.log('you found a coin')
        
    }
}
const user = new Player('', 0, 'PowerUp',false)


function random(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
    user.gotHit()
}
else if(randomNum === 1){
    user.gotCoin()
    user.winner()
}
else if(randomNum === 2){
    user.gotPowerup()
}   user.printOut()
}

// set interval

const intervalID = setInterval(function () {
    console.log("----------------------") // Breaks Lines
    random()
  }, 1000)



