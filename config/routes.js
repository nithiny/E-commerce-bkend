const express = require('express')
const router = express.Router()

const categoryController= require('../app/controllers/categoryController')
const productController = require('../app/controllers/productController')
const userController = require('../app/controllers/userController')
const reviewController = require('../app/controllers/reviewController')

router.get('/category',categoryController.list)
router.get('/category/:id',categoryController.show)
router.post('/category', categoryController.create)
router.put('/category/:id', categoryController.update)
router.delete('/category/:id', categoryController.delete)


router.get('/product', productController.list)
router.post('/product', productController.create)
router.get('/product/:id', productController.show)
router.delete('/product/:id', productController.delete)
router.put('/product/:id', productController.update)


router.get('/user', userController.list)
router.post('/user', userController.create)


router.get('/review', reviewController.list)
router.post('/review', reviewController.create)

module.exports= router
