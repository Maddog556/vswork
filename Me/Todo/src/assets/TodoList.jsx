import React from "react";

function TodoList({todos,setTodos,setEditTodo }){

const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
}

const handleComplete = (todo) => {
    setTodos(
        todos.map((item) =>{
            if (item.id === todo.id){
                return{...item,completed: !item.completed };
            } 
            return item;
        })
    );
};

const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
}


    return(
        <div>
            {todos.map((todo) =>(
               <li className="list-item" key={todo.id}>
                <input
                    type="text"
                    value={todo.title}
                    className="list"
                    onChange={(event) => event.preventDefault()}
                />
                <button className="btn-complete task" onClick={() => handleComplete(todo)}>Completed</button>
                <button className="btn-edit task" onClick={() => handleEdit(todo)}>Edit</button>
                <button className="btn-delete task" onClick={() => handleDelete(todo)}>Delete</button>
               </li> 
            ))}
        </div>
    )
} 

export default TodoList; 