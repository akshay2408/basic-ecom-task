const util = require('../utils');
const carts = require("../mockData/carts.json")
const products = require("../mockData/products.json")

exports.addToCart = async (req, res) => {
  const { id } = req.params
  const data = products.filter(item => item.id == id)[0]
  if (data) {
    const fillCarts = carts.filter(item => item.product_id == id)
    if (fillCarts.length > 0) {
      res.status(200)
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
        res.status(200)
        res.send(response)
      } catch (err) {
        res.status(400)
        res.send(err)
      }
    }
  }
}

exports.getCartList = async (req, res) => {
  let cartlist = []
  try {
    carts.forEach((item) => {
      const product = products.find(({ id }) => id === item.product_id)
      cartlist.push({ ...product, quantity: item.quantity, total_price: product.price * item.quantity })
    })
    res.status(200)
    res.send(cartlist)
  } catch (err) {
    res.status(400)
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
    await util.setCart(carts)
    let cartlist = []
    try {
      carts.forEach((item) => {
        const product = products.find(({ id }) => id === item.product_id)
        cartlist.push({ ...product, quantity: item.quantity, total_price: product.price * item.quantity })
      })
      res.status(200)
      res.send(cartlist)
    } catch (err) {
      res.status(400)
      console.log("err", err)
    }
    res.status(200)
    res.send(cartlist)
  } catch (err) {
    res.status(400)
    res.send(err)
  }
}

exports.removeCart = async (req, res) => {
  const { id } = req.body
  try {
    if (id) {
      const filterCarts = carts.filter(item => item.product_id != id)
      const response = await util.removeProduct(filterCarts)
      res.status(200)
      res.send(response)
    }else{
      const response = await util.removeProduct([])
      res.status(200)
      res.send(response)
    }

  } catch (err) {
    res.status(400)
    res.send(err)
  }
}
