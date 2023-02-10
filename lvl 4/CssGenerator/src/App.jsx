import React,{ useState } from 'react'

import './App.css'

export default function App() {

const [state,setState] = useState({
  angle:"",
  color1:"",
  color2:"",
  color3:""
})

const handleChange = (e) =>{
  setState((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(state,setState)
}

  return (
    <div className="App">
      <header>
        <h1>React Color Generator</h1>
      </header>

      <div className='colorSqaure' style={{border: '1px solid black',
      background:`linear-gradient(
        ${state.angle}deg,
        ${state.color1},
        ${state.color2},
        ${state.color3})`}}>
        </div>

    <form onSubmit = {handleSubmit}>
      <input
      type="number"
      placeholder='Angle'
      className='angleInput'
      name="angle"
      value={state.angle}
      onChange={handleChange}
      />
        <input
      type="color"
      className='color'
      placeholder='First Color'
      name="color1"
      value={state.color1}
      onChange={handleChange}
      />
        <input
      type="color"   
      className='color'
      placeholder='Second Color'
      name="color2"
      value={state.color2}
      onChange={handleChange}
      />
        <input
      type="color"
      className='color'
      placeholder='Third Color'
      name="color3"
      value={state.color3}
      onChange={handleChange}
      />
    </form>
    </div>
  )
}

