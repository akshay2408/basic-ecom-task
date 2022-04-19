
const util = require('../utils');
const users = require("../mockData/users.json")
const jwt = require("jsonwebtoken")

exports.login = (req, res) => {
  const data = users.filter((item) => (item.email === req.body.email) && (item.password === req.body.password))
  if (data.length > 0) {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: '1d' });
    res.send({ ...data, token: token });
    res.status(201)
  } else {
    res.status(404)
  }
}

exports.register = async (req, res) => {
  console.log("here is body", users)
  const { name, email, password, cpassword } = req.body
  if (email.includes("@")) {
    const filemail = users.filter(item => item.email === email)
    if (filemail.length > 0) {
      res.status(400)
      res.send("email already exists!")
    } else {
      if (password === cpassword) {
        users.push({
          "_id": users.length + 1,
          "name": name,
          "email": email,
          "password": password,
        })
        try {
          const response = await util.setUser(users)
          res.status(200).send(response)
        }catch(err){
           res.status(401).send(err)
        }
      } else {
        res.status(401).send("password did not matched!")
      }
    }
  } else {
    res.status(401).send("invailid email address")
  }
}

