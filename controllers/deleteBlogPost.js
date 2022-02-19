const rescue = require('express-rescue');

const { deleteBlogPostService } = require('../services');

const deleteBlogPost = rescue(async (req, res, _next) => {
  const { id } = req.params;

  const deletedData = await deleteBlogPostService(id, req.user.id);

  return res.status(204).json(deletedData);
});

module.exports = deleteBlogPost;