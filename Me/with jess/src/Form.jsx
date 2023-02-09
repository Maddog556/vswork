
// last stage before app jsx 
// cardlist is imported to here and card is imported into it 




import React from 'react'
import {useState} from 'react'
import CardList from './CardList'

export default function Form() {
    //blueprint of what props i need
    const initState = {
        firstName:"",
        lastName:""
    }

//to put that blueprint into a state
    const [inputs, setInputs] = useState(initState)
    //array state to hold the data
    const [data,setData] = useState([])

    // setter function to update state as you type in the input 
function handleChange(e){
    console.log(inputs)
setInputs(preInput => {
    return{
        ...preInput,
        [e.target.name]: e.target.value
    }
})
}

// submits to the arrray and keeps the old info
function handleSubmit(e){
    e.preventDefault()
    setData(preData => [...preData, inputs])
    console.log(data)
    setInputs(initState)
}


    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input
        type= 'text'
        placeholder = "first Name"
        name= "firstName"        
        value={inputs.firstName}
        onChange={handleChange}
        />
         <input
        type= 'text'
        placeholder = "last Name"
        name= "lastName"        
        value={inputs.lastName}
        onChange={handleChange}
        />
        <button>Submit</button>
        </form>
       <>
        <CardList data ={data}/>
        </>
        </div>
    )
}