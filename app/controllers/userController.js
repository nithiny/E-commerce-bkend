const User =require ('../models/user')

module.exports.list = (req,res) =>{
    User.find()
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports.create = (req, res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.send(err)
    })

}