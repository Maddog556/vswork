import React, {useState}from 'react'
import Header from './assets/Heeader'
import Form from './assets/Form'
import TodoList from './assets/TodoList'
import './App.css'


function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null);
 
  return (
    <div className="Container">
      <Header />
      <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      setEditTodo={setEditTodo}
      />
    </div>
  )
}

export default App
