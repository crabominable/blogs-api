require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = { algorithms: ['HS256'] };

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
  } catch (err) {
    const error = {
      code: 'invalidToken',
      message: 'Expired or invalid token',
    };
    throw error;
  }
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    verifyToken(token);

    next();
  } catch (err) {
    return next(err);
  }

  /* const user = await postGetUser(email);

  req.user = user; */

  // res.status(401).json({ message: 'Expired or invalid token' });
};

module.exports = {
  validateToken,
};