const rescue = require('express-rescue');

const { deleteUserService } = require('../services');

const deleteUser = rescue(async (req, res, _next) => {
  await deleteUserService(req.user.id);

  return res.status(204).json();
});

module.exports = deleteUser;