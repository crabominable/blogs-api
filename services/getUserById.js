const { User } = require('../models');

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    const error = { error: {
      code: 'notFound',
      message: 'User does not exist',
    } };
    return error;
  }
  return user;
};

module.exports = getUserById;