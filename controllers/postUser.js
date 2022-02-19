require('dotenv').config();
const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const { postUserService } = require('../services');

const postUser = rescue(async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const result = await postUserService(displayName, email, password, image);

  if (result.error) {
    return next(result.error);
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: result }, process.env.JWT_SECRET, jwtConfig);

  return res.status(201).json({ token });
});

module.exports = postUser;