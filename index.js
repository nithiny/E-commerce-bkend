const express = require('express')
const mongoose = require('./config/database')
const router  = require('./config/routes')
const port = 3010
const app = express()

app.use(express.json())
app.use('/',router)


app.listen(port ,()=>{
    console.log('listing to port ', port)
})