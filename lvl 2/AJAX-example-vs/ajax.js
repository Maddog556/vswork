
//does not work here its blocked by CORS policy: No 'Access-Control-Allow-Origin'



//The setup
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText
//Which two ways to send 
// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1


const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://swapi.co/api/people/1", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JOSN.parse(JSONdata)
        console.log(data)
    }  else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}


function showData(luke){
    const h1 = document.createElement('h1')
    h1.textContent = luke.name
    document.body.appendChild(h1)
}
