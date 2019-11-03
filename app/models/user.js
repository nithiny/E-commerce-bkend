const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const userSchema =  new Schema({

    username : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type : String,
        required: true
    },
    mobile :{
        type: Number,
        required:true,
        maxlength:10
    },
    address :[
        {
            city:{
              type: String,
              required: true
            },
            state:{
                type : String,
                required: true
            },
            area:{
                type : String,
                required: true
            },
            pincode :{
                type: Number,
                required: true,
                minlength: 6
            }
        }
    ]


        
})

const User =  mongoose.model('/user', userSchema)
module.exports  = User