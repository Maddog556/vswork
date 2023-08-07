//- Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
//- Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation. 

const btn = document.getElementById("btn");
btn.addEventListener("click",function (){
   var messagesLeft = document.getElementsByClassName("messageLeft")
//when yo use getElementsByClassName or querySelectorAll it will bring an 
// array of infomation and using a for loop helps you get to each item.
for (var i = 0; i< messagesLeft.length; i++) {
    messagesLeft[i].textContent = "YOU HAVE BEEN HACKED"
    console.log(messagesLeft[i])
}})
btn.addEventListener("click",function(){
    var messagesRight = document.getElementsByClassName("messageRight")
for ( var i = 0; i < messagesRight.length; i++){
    messagesRight[i].textContent ="YOU HAVE BEEN HACKED"
    console.log(messagesRight[i])
}})
document.getElementById("clear").addEventListener("click", eraseText);
    function eraseText() {
    document.getElementsByClassName("messages")
var messages = document.getElementsByClassName("messages")
for ( var i = 0; i < messages.length; i++){
    messages[i].textContent=""

}} 
//const variable does not change let varibale does
const dropDown = document.getElementById("theme-drop-down")
dropDown.addEventListener("change",function(e){
    let messageLeft = document.querySelectorAll(".messageLeft")
    let messageRight = document.querySelectorAll(".messageRight")

// this is called array method 
    let value = e.target.value 
    if (value === "theme-one") {
        messageLeft.forEach(element => { 
            element.style.backgroundColor="burlywood";
            element.style.color = "black"
        })
        messageRight.forEach(element =>{
            element.style.backgroundColor="lightblue"
            element.style.color = "black"
        })
    } else if(value ==="theme-two"){
        messageLeft.forEach(element => {
            element.style.backgroundColor="red"
            element.style.color="black"
        })
        messageRight.forEach(element =>{
            element.style.backgroundColor="black"
            element.style.color="white"
        })
        
    }
})
