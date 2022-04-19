
const fs = require("fs");
const products = require("../mockData/products.json")

exports.products = async (req, res) => {
  res.send(products)
}

exports.productById = async (req, res) => {
  const { id } = req.params
  const prod = products.filter((item) => item.id == id)
  console.log("prod length", prod.length)
  if (prod.length > 0) {
    res.send(prod[0])
  } else {
    res.status(404).send("product not found")
  }

}
