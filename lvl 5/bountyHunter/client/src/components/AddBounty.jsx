
import React,{useState} from "react";
import "./Addbounty.css"

export default function AddBounty(props){
    
    const initInputs = {
        firstName:props.firstName || '', 
        lastName:props.lastName || '',
        age: props.age || '',
        type: props.type || '',
        status: props.status || ''
    }
    const [inputs,setInputs] = useState(initInputs)

    function handleChange(e){
        const {name ,value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]:value}))
    }
// adds the bounty 
    function handleSubmit(e){
        e.preventDefault()
        //post request
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            name='firstName' 
            value={inputs.firstName} 
            onChange={handleChange} 
            placeholder='First Name'/>

            <input 
            type='text' 
            name='lastName' 
            value={inputs.lastName} 
            onChange={handleChange} 
            placeholder='Last Name'/>

            <input 
            type='number' 
            name='age' 
            value={inputs.age} 
            onChange={handleChange} 
            placeholder='Age'/>
          
          <select name="status" id="status" onChange={handleChange}>
                <option>--Status--</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
            </select>
            
            <select name="type" id="type" onChange={handleChange}>
                <option>--Type--</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>

            <button>{props.btnText}</button>

        </form>
    )
}