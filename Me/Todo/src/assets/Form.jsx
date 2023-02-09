import { title } from "process";
import React from "react"
import {v4 as uuidv4} from "uuid";

function Form ({input,setInput,todos,setTodos,editTodo,setEditTodo}) {

const onInputChange = (event) =>{
    setInput(event.target.value); 
};

const updateTodo = (title,id,completed) => {
    const newTodo = todos.map((todo) =>{
      todo.id === id ? {title,id,completed} : todo;  
    });
    setTodos(newTodo);
    setEditTodo("");
}

const onFormSubmit = (event) => {
    event.preventDefault()
    if(!editTodo){
    setTodos([
        ...todos,{
            id:uuidv4(),
            title:input,
            completed:false
        }]) 
        setInput("");
    } else {
        updateTodo(input, editTodo.id, editTodo.completed)
    }
};

    return(
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placaeholder="Enter Todo Here..."
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="buttomn-add">Add Todo</button>
        </form>
    )
}

export default Form;