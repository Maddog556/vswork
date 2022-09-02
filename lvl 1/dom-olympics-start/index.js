//- Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
//- Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation. 
const btn = document.getElementById("btn");
btn.addEventListener("click",function handleClick(){
    document.getElementsByClassName("messages").innerHTML ="You Been Hacked";
    console.log("working")
})

