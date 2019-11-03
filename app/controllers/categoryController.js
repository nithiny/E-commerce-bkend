const Category = require('../models/category')


module.exports.list =(req, res)=>{
    Category.find()
    .then((category)=>{
          res.json(category)
    })
    .catch ((err)=>{
        res.json(err)
    })
}

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category) => {
            res.json(category) 
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) =>{
    const id = req.params.id
     Category.findById(id)
        .then((category)=>{
           
        if(category){
        res.json(category)
            }
            else {
             res.json({})
            }
     })
     .catch((err)=>{
         res.send(err)
     })
}


module.exports.delete = (req,res) =>{
    const id= req.params.id
    Category.findByIdAndDelete(id)
    .then((category)=>{
        if(category){
            res.json(category)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update = (req,res) =>{
   
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body)
    .then((category)=>{
        if(category){
            res.json(category)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}