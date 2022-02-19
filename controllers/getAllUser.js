// require('dotenv').config();
// const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const { getAllUserService } = require('../services');

const getAllUser = rescue(async (_req, res, _next) => {
  const result = await getAllUserService();

  return res.status(200).json(result);
});

module.exports = getAllUser;