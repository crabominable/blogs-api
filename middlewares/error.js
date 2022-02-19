module.exports = (err, _req, res, _next) => {
  if (err.code) {
    const statusByErrorCode = {
      alreadyExists: 409,
      invalidFields: 400,
      invalidToken: 401,
      notFound: 404,
    };
    const status = statusByErrorCode[err.code];
  
    return res.status(status).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};