




const list = document.querySelector(".list")

axios.get("https://api.vschool.io/josh/todo/")
.then(response => {
    const listItems = response.data
    for(let i = 0; i < response.data.length; i++){
        getData(listItems[i]) 
    }
})

function getData(todo){
    const block = document.createElement("div")
    block.className = "block"
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const check = document.createElement('input')
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    const editForm = document.createElement('form')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const input3 = document.createElement('input')
    const input4 = document.createElement('input')
    const button3 = document.createElement('button')
    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl 
    h2.textContent = todo.price
    check.type = "checkbox"
    button.type = "submit"
    button.innerHTML = "<i class = 'fas fa-trash-can'></i>"
    button.id = "trash"
    button2.innerHTML = "<i class = 'fas fa-pen'></i>"
    button2.id = "change"
    editForm.id = "change"
    input1.type = "text"
    input1.value = todo.title
    input1.id ="title"
    input2.type = "text"
    input2.value = todo.description
    input2.id ="description" 
    input3.type = "text"
    input3.value = todo.imgUrl
    input3.id ="imgUrl" 
    input4.type = "text"
    input4.value = todo.price
    input4.id ="price"
    button3.type = "submit"
    button3.innerHTML= "<i class = 'fas fa-check'></i>"
    button3.id = "check"
    block.appendChild(h1)
    block.appendChild(p)
    block.appendChild(img)
    block.appendChild(h2)
    block.appendChild(check)
    block.appendChild(button)
    block.appendChild(button2)
    editForm.style.display = "none"
    editForm.appendChild(input1)
    editForm.appendChild(input2)
    editForm.appendChild(input3)
    editForm.appendChild(input4)
    editForm.appendChild(button3)
    console.log(img)

    block.addEventListener('change', (e)=> {
        e.preventDefault()
        if(check.checked === true){
            axios.put(`https://api.vschool.io/josh/todo/${todo._id}`, {completed: true}).then( response =>{
                response.data
                h1.style.textDecoration = "line-through"
                p.style.textDecoration = "line-through"
            })
        }else if(check.checked === false) {
            axios.put(`https://api.vschool.io/josh/todo/${todo._id}`, {completed: false}).then( response =>{
                response.data
                h1.style.textDecoration = "none"
                p.style.textDecoration = "none"
            })
        }
    })


    button.addEventListener("click", ()=>{
    axios.delete(`https://api.vschool.io/josh/todo/${todo._id}`)
    .then(response =>{
        response.data
        block.remove()
        alert(response.data.msg)
    })
    })

    button2.addEventListener("click", () =>{
        block.style.display ="none"
        editForm.style.display = "inline-block"
    })
    editForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const edit = {
        title:editForm.title.valueOf,
        description:editForm.description.value,
        imgUrl:editForm.imgUrl.value,
        price:editForm.price.value
    }
    axios.put(`https://api.vschool.io/josh/todo/${todo._id}`,edit)
    .then(response => {
        response.data
        editForm.style.display = "none"
        block.style.display = "block"
        document.location.reload(true)
    })
})
    list.appendChild(block)
    list.appendChild(editForm)
}

todo.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: todo.title.value,
        description: todo.description.value,
        imgUrl: todo.imgUrl.value,
        price: todo.price.value
    }
axios.post("https://api.vschool.io/josh/todo",newTodo)
    .then(response => {
        getData(response.data)
    })
    .catch(error => console.log(error))
})
const mainBtn = document.button
mainBtn.addEventListener("submit", (e)=>{
    e.preventDefault
    input.clear()
})