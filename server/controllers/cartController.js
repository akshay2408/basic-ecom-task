
const util = require('../utils');
const carts = require("../mockData/carts.json")
const products = require("../mockData/products.json")

exports.addToCart = async (req, res) => {
  const { id } = req.params
  const data = products.filter(item => item.id == id)[0]
  if (data) {
    const fillCarts = carts.filter(item => item.id == id)
    if (fillCarts.length > 0) {
      res.send("product already added to cart")
    } else {
      try {
        carts.push(data)
        const response = await util.setCart(carts)
        res.send(response)
      } catch (err) {
        res.send(err)
      }
    }
  }
}

exports.cartList = async (req, res) => {

  res.send(carts)
}

exports.removeCart = async (req, res) => {
  const { id } = req.params
  try {
    const fillCarts = carts.filter(item => item.id != id)
    const response = await util.removeProduct(fillCarts)
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}
