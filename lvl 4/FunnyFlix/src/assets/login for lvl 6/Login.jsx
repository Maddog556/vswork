// import React ,{useState} from "react"

// function Login () {

//     const [email,setEmail] = useState('')
//     const [pass, setPass] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email,pass)
//     }
    
//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//         <label htmlFor='email'> Email </label>  
//         <input value={email} onChange = {(e)=> setEmail(e.target.value)} type='email'placeholder="YourEmail@gmail.com" id='email'name='email'  />
//         <label htmlFor='password'> Password </label>  
//         <input  value={pass} onChange = {(e)=> setPass(e.target.value)}type='password'placeholder="******" id='password' name='password' />
//         <button>Login</button>
//         </form>
//         <button>Dont have an account? Register Here</button>
//         </>
//     )
// }
 
// // export default Login