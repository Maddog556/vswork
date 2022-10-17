


const btn = document.getElementById("click")
let counter = document.getElementById("output")
let tim = document.getElementById("time")
let lastNum = document.getElementById("record")

// setting the numbers values 
let numberOfClicks = 0
output.value=numberOfClicks

//when btn is click adds 1 to the counter
btn.addEventListener("click", event =>{
    event.preventDefault()
    output.value = numberOfClicks +=1;
localStorage.setItem(output,numberOfClicks);
})
// saveing to localStorage
let count = parseInt(localStorage.getItem(output,numberOfClicks));
lastNum.append(count)

// the countdown
 let timer = 10
let stopClock = setInterval(function(){
    if(timer === 0){
        clearInterval(stopClock);
        alert("Time is Up")
    }else;{
        document.getElementById("time").innerHTML = timer +" seconds remaining"
        timer-=1; 
    }
},1000);
setTimeout(stopClock,10000);

