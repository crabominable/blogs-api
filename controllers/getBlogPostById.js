const rescue = require('express-rescue');

const { getBlogPostByIdService } = require('../services');

const getBlogPostById = rescue(async (req, res, _next) => {
  const { id } = req.params;

  const post = await getBlogPostByIdService(id);

  return res.status(200).json(post);
});

module.exports = getBlogPostById;