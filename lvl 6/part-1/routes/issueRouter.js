const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue.js")


// mongodb makes its own ids
// this is a mongoose

//get issue by user id
issueRouter.get("/user",(req,res,next) =>{
    Issue.find({user:req.auth._id},(err,issue)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

// Get All 
issueRouter.get("/", (req,res,next) =>{
    Issue.find((err, issue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

// Add one 
issueRouter.post("/", (req,res,next) =>{
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err,savedIssue) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete One
// take id for list the use in url in postman then tab delete 
issueRouter.delete("/:issueId", (req,res,next)=>{
    Issue.findOneAndDelete({_id : req.params.issueId, user:req.auth._id},
        (err,deleteIssue) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted issue ${deleteIssue.title} from the Database`)
    })
})

//Update One
issueRouter.put('/:issueId', (req,res,next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId,user:req.auth._id},// find this one to update   user:req.auth._idis to make sure only the user can do updates and deletes with 
        req.body,//update the object with this data
        {new: true},// send back the updated version please
        (err,updateIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateIssue)
        }
    )
})

module.exports = issueRouter