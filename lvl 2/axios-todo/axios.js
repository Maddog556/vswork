


axios.get("https://api.vschool.io/josh/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
    }
})

const todo = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todo.title.value,
        description: todo.description.value,
        imgUrl: todo.imgUrl.value
    }
axios.post("https://api.vschool.io/josh/todo",newToDo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})