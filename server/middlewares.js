const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = authorization.split(" ")[1]
  if (token) {
    try {
      jwt.verify(token, jwtSecretKey);
      next()
    } catch (error) {
      res.json({
        login: false,
        data: error
      });
    }
  }
};