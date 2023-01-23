
import React from 'react'
import './App.css'

function App() {
const [colorData, setColorData] = React.useState({})
const [color, setColor] = React.useState(1)

React.useEffect(function(){
  fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(res => res.json())
  .then(data => setColorData(data))
},[color])

console.log(colorData.new_color)

  return (
    <div style={{backgroundColor: "#" + `${colorData.new_color}`}} >  
      <h2>The color is #{colorData.new_color}</h2>
      <button onClick={() => setColor(prevColor => prevColor + 1)}>Get Next Color</button>
      <pre>{JSON.stringify(colorData, null, 2)}</pre>
    </div>
  )
}

export default App
