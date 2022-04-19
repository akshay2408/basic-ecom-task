const express = require("express")

const middlewares = require('./middlewares')
const cartController = require("./controllers/cartController")
const productContorller = require("./controllers/productContorller")
const userController = require("./controllers/userController")

const app = express()
app.use(express.json())


app.post('/register', userController.register)
app.post('/login', userController.login)
app.get('/products', middlewares.verifyToken, productContorller.products)
app.get('/products/:id', middlewares.verifyToken, productContorller.productById)
app.get('/carts', middlewares.verifyToken, cartController.cartList)
app.post('/cart/:id', middlewares.verifyToken, cartController.addToCart)
app.delete('/cart/:id', middlewares.verifyToken, cartController.removeCart)

module.exports = app