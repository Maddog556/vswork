const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()
const {expressjwt} = require('express-jwt')


// Middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.3mv0url.mongodb.net/funnyflix`,
() => console.log("connected to the data base")
)

//Routes
app.use('/auth', require('./routes/authRouter.js'))
app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
// express-jwt is a npm package it is a gate keep it checks for token


//Error handler and to have these 4 params 
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//server listen//
app.listen(9000, () => {
    console.log("the server is running on Port 9000")

})