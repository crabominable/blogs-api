const validateLoginEmail = (req, res, next) => {
  const { email } = req.body;

  // const EMAIL_REGEX = /\S+@\S+\.\S+/;

  if (email === '') {
    return res.status(400)
      .json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400)
      .json({ message: '"email" is required' });
  }

  return next();
};

const validateLoginPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

module.exports = {
  validateLoginEmail,
  validateLoginPassword,
};