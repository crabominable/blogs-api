const { User } = require('../models');

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = deleteUser;