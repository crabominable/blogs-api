const { User } = require('../models');

const postUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    const error = { error: {
      code: 'alreadyExists',
      message: 'User already registered',
    } };
    return error;
  }
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

module.exports = postUser;