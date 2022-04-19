const express = require("express")

const userController = require("./controllers/userController")

const app = express()
app.use(express.json())


app.post('/register', userController.register)
app.post('/login', userController.login)

module.exports = app