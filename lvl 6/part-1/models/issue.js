const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
title:{
    type: String,
    require:true
},
description:{
    type: String
},
completed:{
    type: Boolean,
    default: false
},
imgUrl:{
    type: String
},
user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    require:true
}
})

module.exports = mongoose.model("Issue", issueSchema)