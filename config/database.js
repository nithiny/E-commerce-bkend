const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/Ecommerce-bkend', { useNewUrlParser: true } )
    .then(()=>{
           console.log('sucessfully connected to db')
    })
    .catch ((err)=>{
          console.log('error in connecting to db' , err)
    })
