require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const jwtConfig = { algorithms: ['HS256'] };

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
    return decoded;
  } catch (err) {
    const error = {
      code: 'invalidToken',
      message: 'Expired or invalid token',
    };
    throw error;
  }
};

const validateWithUserToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = decodeToken(token);

    const user = await User.findOne({ where: { email: decoded.data } });

    req.user = user;

    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateWithUserToken;