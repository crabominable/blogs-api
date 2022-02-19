const validateUserDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  return next();
};

const validateUserEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400)
      .json({ message: '"email" is required' });
  }
  const EMAIL_REGEX = /\S+@\S+\.\S+/;

  if (!email.match(EMAIL_REGEX)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  return next();
};

const validateUserPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  return next();
};

module.exports = {
  validateUserDisplayName,
  validateUserEmail,
  validateUserPassword,
};