let form = document.getElementsByClassName("airForm");
let submit = document.getElementById("submit");

function formAlert(){
    let fName= form.elements["fName"].value;
    let lName= form.elements["lName"].value;
    let age= form.elements["age"].value;
    let gender= form.elements["gender"].value;
    let location= form.elements["location"].value;
    let diet= [];
    if (form.elements["vegan"].checked){
        diet.push(document.getElementById("vegan").value);
    } if(form.elements["kosher"].checked){
        diet.push(document.getElementById("kosher").value);
    } if(form.elements["lactose"].checked){
        diet.push(document.getElementById("lactose").value);
    }
    alert("First Name " + fName + "\nLast Name " + lName + "\NAge " + age + "\nGender "+ gender + "\n Location" + location + "/nDiet" +diet)
}
// problem here 
submit.addEventListener("click", formAlert);