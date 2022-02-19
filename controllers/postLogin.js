require('dotenv').config();
const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const { postLoginService } = require('../services');

const postLogin = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await postLoginService(email, password);

  if (result.error) {
    return next(result.error);
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: result.email }, process.env.JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
});

module.exports = postLogin;