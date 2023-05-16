const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

# this is with express and hard coded data was the first router
 const bounties = [
     {firstName:'Sam', lastName:'Tilly', age:33, status:'Dead', type:'Jedi',_id:uuidv4()},
     {firstName:'Tea', lastName:'Willy', age:86, status:'Dead', type:'Sith',_id:uuidv4()},
    {firstName:'Pat', lastName:'Slappy', age:300, status:'Alive', type:'Sith',_id:uuidv4()},
    {firstName:'Jim', lastName:'Happy', age:48, status:'Alive', type:'Jedi',_id:uuidv4()},
 ]

 # Get list

bountyRouter.get("/", (req,res) =>{
    res.status(200)
    res.send(bounties) 
})

# Get one
bountyRouter.get('/:bountyId',(req,res,next) =>{
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        //this makes a Error object
        const error = new Error(`The Bounty with ID ${bountyId} was not found.`)
        // this is a server error
        res.status(500)
        //status is not a methods of next must be two separate lines
        return next(error)
    }
    //status and send are both methods of the res or response so they can be chained together
    res.status(200).send(foundBounty)
})
# Get by Status
bountyRouter.get("/search/status",(req,res,next) =>{
    const status = req.query.status
    if(!status){
        const error = new Error("status was not found")
        res.status(500)
        return next(error)
    }
    const filteredBounties = bounties.filter(bounty => bounty.status === status)
    res.status(200).send(filteredBounties)
})
# Add one 
bountyRouter.post("/", (req,res) =>{
    const newBountyAdded = req.body
    newBountyAdded._id = uuidv4()
    bounties.push(newBountyAdded)
    //the status can also be 202
    res.status(201).send(newBountyAdded)
})

# Delete One
bountyRouter.delete("/:bountyId", (req,res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Deleted Bounty")
})

# Update One
bountyRouter.put("/:bountyId",(req,res)=>{
    const bountyId =  req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties =>bounties._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex],req.body)
    res.status(201).send(updateBounty)
})

module.exports = bountyRouter