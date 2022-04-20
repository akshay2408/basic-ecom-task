const products = require("../mockData/products.json");

exports.getProducts = async (req, res) => {
  res.status(200);
  res.send(products)
};