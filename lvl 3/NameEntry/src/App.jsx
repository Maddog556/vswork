import React from 'react'
import './App.css'

function App() {
// making empty array 
const [nameList, setNameList] = React.useState([])
const [Name, setName] = React.useState("")
// this targets the value to change on the submit event
function handleChange(event) {
  setName(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  console.log(nameList)
  // this keeps old data of the array and updates it with Name
  setNameList(nameList =>[...nameList, Name])
  console.log(nameList)
  setName("")
}

const nameArray = nameList.map(name => <li key={name}>{name}</li>) 

  return (
    <form onSubmit={handleSubmit}>
      <h1> List of Names</h1>
      <input 
      type="text"
      placeholder='Type Name Here'
      onChange={handleChange}
      value={Name}
      />
      <button>Submit Name</button>
      <ol>
        {nameArray}
      </ol>
    </form>
  )
}

export default App
