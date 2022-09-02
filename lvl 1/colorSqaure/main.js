 
 document.getElementById("clickMe").addEventListener('click', function(){
   console.log("You clicked me!");
 })
 //hover cruser 
 document.getElementById("clickMe").addEventListener("mouseover", mouseOver);
 document.getElementById("clickMe").addEventListener("mouseout", mouseOut);
 
 function mouseOver() {
   document.getElementById("square").style.backgroundColor = "blue";
 }
 
 function mouseOut() {
   document.getElementById("square").style.backgroundColor = "black";
 }
 //double click
 document.getElementById("clickMe").addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("square").style.backgroundColor = "green";
}
//mouse button held and relase
document.getElementById("clickMe").addEventListener("mousedown", mouseDown);
document.getElementById("clickMe").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("square").style.backgroundColor = "red";
}

function mouseUp() {
  document.getElementById("square").style.backgroundColor = "yellow";
}
//Scroll wheel
window.addEventListener("wheel", onScroll);

function onScroll() {
  document.getElementById("square").style.backgroundColor = "orange";
}