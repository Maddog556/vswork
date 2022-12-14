//Tip: You won't be able to use node for this, because XMLHttpRequest() only exists in a browser. 
//So you'll need to use an HTML file that links to your JavaScript and run it in the browser.



//The setup
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText


const xhr = new XMLHttpRequest()

//how to send
        //method  //url                         //async?
// xhr.open("GET","https://api.vschool.io/pokemon", true)
// xhr.send()


//the setup 
//xhr.onreadystatechange
xhr.onreadystatechange = function(){
    //xhr.readyState
    if(xhr.readyState === 4 && xhr.status === 200){
       //turn from string to json data
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        const pokemon = data.objects[0].pokemon
        show(pokemon)
    }
}
xhr.open("GET","https://api.vschool.io/pokemon",true)
xhr.send()

show = pokemon =>{
    for(let i = 0; i < pokemon.length; i++){
    let newh1 = document.createElement("h1")
    newh1.innerHTML += pokemon[i].name.toUpperCase()
    document.body.append(newh1) 
    }
}