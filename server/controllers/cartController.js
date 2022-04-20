
const util = require('../utils');
const carts = require("../mockData/carts.json")
const products = require("../mockData/products.json")

exports.addToCart = async (req, res) => {
  const { id } = req.params
  const data = products.filter(item => item.id == id)[0]
  if (data) {
    const fillCarts = carts.filter(item => item.product_id == id)
    if (fillCarts.length > 0) {
      res.send("product already added to cart")
    } else {
      try {
        carts.push({
          id: carts.length + 1,
          product_id: parseInt(id),
          user_id: 1,
          quantity: 1
        })
        const response = await util.setCart(carts)
        res.send(response)
      } catch (err) {
        res.send(err)
      }
    }
  }
}

exports.cartList = async (req, res) => {
  let cartlist = []
  try {
    carts.forEach((item) => {
      const product = products.find(({ id }) => id === item.product_id)
      cartlist.push({ ...product, quantity: item.quantity, total_price: product.price * item.quantity })
    })
    res.send(cartlist)
  } catch (err) {
    console.log("err", err)
  }
}

exports.updateCart = async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body
  try {
    carts.forEach((item, index) => {
      if (item.product_id == id) {
        carts.splice(index, 1, { ...item, quantity: quantity })
      }
    })
    const response = await util.setCart(carts)
    let cartlist = []
    try {
      carts.forEach((item) => {
        const product = products.find(({ id }) => id === item.product_id)
        cartlist.push({ ...product, quantity: item.quantity, total_price: product.price * item.quantity })
      })
      res.send(cartlist)
    } catch (err) {
      console.log("err", err)
    }
    res.send(cartlist)
  } catch (err) {
    res.send(err)
  }
}

exports.removeCart = async (req, res) => {
  const { id } = req.params
  try {
    const fillCarts = carts.filter(item => item.product_id != id)
    const response = await util.removeProduct(fillCarts)
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}
