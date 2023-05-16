const express = require('express')
const app = express()

//super basics of middleware with next 
app.use(express.json())

app.use("/items", (req,res,next)=>{
    console.log('the middleware')
    next()
})

app.get("/items", (req,res,next) =>{
    console.log('get request')
    res.send('hello world')
})

app.listen(9000, () => {
    console.log("the server is running")
})


//use postman localhost:9000/items