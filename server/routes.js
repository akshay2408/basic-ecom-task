const express = require("express")
const app = express()

const middlewares = require('./middlewares')
const cartController = require("./controllers/cartController")
const productContorller = require("./controllers/productContorller")
const userController = require("./controllers/userController")

app.post('/register', userController.register)
app.post('/login', userController.login)
app.get('/user',userController.getUser )

app.get('/products', middlewares.verifyToken, productContorller.getProducts)
app.get('/carts', middlewares.verifyToken, cartController.getCartList)
app.post('/cart/:id', middlewares.verifyToken, cartController.addToCart)
app.delete('/cart', middlewares.verifyToken, cartController.removeCart)
app.patch('/cart/:id',  cartController.updateCart)

module.exports = app