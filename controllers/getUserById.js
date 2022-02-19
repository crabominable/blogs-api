const rescue = require('express-rescue');

const { getUserByIdService } = require('../services');

const getUserById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await getUserByIdService(id);

  if (user.error) {
    return next(user.error);
  }
  return res.status(200).json(user);
});

module.exports = getUserById;