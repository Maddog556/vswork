// import React,{useState} from "react"

// function Register() {
// const [userName,setUserName] = useState('')
// const [email,setEmail] = useState('')
// const [password,setPassword] = useState('')

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email,userName,password)

// }


//     return(
//         <form onSubmit={handleSubmit}>
//         <label htmlFor='UserName'> User Name </label>  
//         <input type='UserName' value={userName} onChange = {(e)=> setUserName(e.target.value)} placeholder="UserName" id='UserName'name='UserName' />
//         <label htmlFor='email'> Email </label>  
//         <input type='email'value={email} onChange = {(e)=> setEmail(e.target.value)}placeholder="YourEmail@gmail.com" id='email'name='email' />
//         <label htmlFor='password'> Password </label>  
//         <input type='password'value={password} onChange = {(e)=> setPassword(e.target.value)}placeholder="******" id='password' name='password' />
//         <button>Sign UP</button>
//         </form>
//     )
// }
// export default Register