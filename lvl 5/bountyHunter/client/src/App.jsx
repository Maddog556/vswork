
import React from "react"
import Bounty from "./components/Bounty.jsx"
import './App.css'


function App() {

  // function HandleFilter(e){
  //   axios.get(`/bountiesList/search/type?type=${e.target.value}`)
  //   .then(res => comsole.log(res))
  //   .catch(err => console.log(err))
  // }

  return (
 <div>
  {/* <h4>Filter by Type</h4>
  <select onChange={HandleFilter}>
  <option>-- Select a Type --</option>
  <option value="Jedi">Jedi</option>
  <option value="Sith">Sith</option>
  </select> */}
  <Bounty/>
 </div>
 
 )}

export default App
