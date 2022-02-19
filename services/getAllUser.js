const { User } = require('../models');

const getAllUser = async () => {
  const users = await User.findAll();

  /* if (!users) {
    const error = error: {
      code: 'notFound',
      message: ''
    }
  } */
  return users;
};

module.exports = getAllUser;