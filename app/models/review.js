const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema ({

    name:{
        type : String,
        required :true
    },

    description:{
        type: String,
        required: true
    },
    rating :{
        type : Number,
        required: true,
        minlength:1 ,
        maxlength:5
    },
    createdAt :{
        type: Date,
        default : Date.now()
    },
    product :{
        type:Schema.Types.ObjectId,
        ref : "Product"
    }


})

const Review = mongoose.model('review',reviewSchema)
module.exports =Review

