const Product = require('../models/products')
const multer = require('multer')


module.exports.list = (req, res) =>{
    Product.find()
    .then((product)=>{
        res.json(product)
    })
    .catch((err)=>{
        res.json(err)
    })
    

}
module.exports.create = (req, res) => {
    const body = req.body
    const product = new Product(body)
    product.save()
        .then((product) => {
            res.json(product) 
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) =>{
    const id =req.params.id
    Product.findById(id)
    .then((product)=>{
        if(product) {
        res.send(product)
        }
        else {
            res.send({})
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}


module.exports.delete =(req,res) =>{
    const id= req.params.id
    Product.findByIdAndDelete(id)
    .then((product)=>{
        if(product){
            res.send(product)
        }
        else {
            res.send({})
        }
        
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports.update = (req, res) =>{
    const id = req.params.id
    const body = req.body
    Product.findByIdAndUpdate(id , body)
    .then((product)=> {
          if(product){
              res.send(product)
          }
          else {
              res.send({})
          }
    })
    .catch((err)=>{
        res.send(err)
    })
}
