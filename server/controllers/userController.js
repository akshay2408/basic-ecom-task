const util = require("../utils");
const users = require("../mockData/users.json");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const user = users.find(
    (item) =>
      item.email === req.body.email && item.password === req.body.password
  );
  if (user) {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "1d" });
    res.status(201);
    res.send({ username: user.name, email: user.email, token: token });
  } else {
    res.status(400);
    res.send("credential is not matchs!");
  }
};

exports.register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  try {
    if (email.includes("@")) {
      const filemail = users.find((item) => item.email === email);
      if (filemail) {
        res.status(400);
        res.send("email already exists!");
      } else {
        if (password === cpassword) {
          users.push({
            _id: users.length + 1,
            name: name,
            email: email,
            password: password,
          });

          const response = await util.setUser(users);
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          const token = jwt.sign({ name, email, password }, jwtSecretKey, {
            expiresIn: "1d",
          });
          res.status(200);
          res.send({ token: token, message: response });
          // res.status(200).send(response)
        } else {
          res.status(401).send("password did not matched!");
        }
      }
    } else {
      res.status(401).send("invailid email address");
    }
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getUser = (req, res) => {
  const authorization = req.headers.authorization;
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = authorization.split(" ")[1];
  if (token) {
    try {
      const user = jwt.verify(token, jwtSecretKey);
      const userData = users.find((item) => item.email === user.email);
      res.status(200);
      res.send({
        id: userData._id,
        username: userData.name,
        email: userData.email,
      });
    } catch (error) {
      res.status(400);
      res.json({
        auth: false,
        data: error,
      });
    }
  }
};
