const mongoose  =  require('mongoose')
const Schema =  mongoose.Schema

const productSchema =  new Schema ({

    name:{
        type: String,
        required:true

    },
    description :{
        type: String,
        required:true
    },
    price :{
        type: Number,
        required: true
    },
    categoryId:{
        type : Schema.Types.ObjectId,
        ref:'Category',
    }

})

const Product = mongoose.model('product', productSchema)
module.exports = Product 