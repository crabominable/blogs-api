const { User } = require('../models');

const postLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    const error = { error: {
      code: 'invalidFields',
      message: 'Invalid fields',
    } };
    return error;
  }

  return user;
};

module.exports = postLogin;