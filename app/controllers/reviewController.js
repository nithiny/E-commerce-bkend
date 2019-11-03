const Review = require('../models/review')

module.exports.list = ((req, res)=>{
    Review.find()
    .then((review)=>{
        if(review){
            res.send(review)
        }
        else { 
            res.send('no review for this item')
        }
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports.create = ((req, res)=>{
    const body = req.body
    const review = new Review(body)
    review.save()
     .then((review) =>{
         if (review){
             res.send(review)
         }
         else {
             res.send({})
         }
     })
     .catch ((err)=>{
         res.send(err)
     })

})