let numbers = [1,2,3,4,5,6]

const num = numbers.map((num) =>{
    return num + 1
})

console.log(numbers)
console.log(num)


let data = ["john","tim","sam","tilla"]

const upCaseName = data.map((name) => {
    if( name[0] ==="t" ){
    return name.toUpperCase()
    } else {
        return name
    }
    
})
console.log(upCaseName)



//formjs

// import React, { useState } from "react";

// function Form(props) {

// const [newName,setNewName] = useState({
//   name: ""
// })
// console.log(newName)

//   const handleChange = (e) => {
//     setNewName(prevNewName =>{
//       return{
//         ...prevNewName,
//         [e.target.name]: e.target.value
//       }
//     })
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(Form)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="First Name"
//         name="name"
//         value={newName.name}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;


//appjs

// import "./styles.css";
// import Form from "./Form";
// import { useState } from "react";

// function App() {
//   const [list, setList] = useState(["Jane"]);

//   const nameList = list.map((name)=> {
//       return name
//   })
// console.log(nameList)


//   return (
//     <div className="App">
//       <h2>Add New Name</h2>
//       <Form  />
//       <h1>Names</h1>
//       <p>{nameList}</p>
//     </div>
//   );
// }

// export default App;