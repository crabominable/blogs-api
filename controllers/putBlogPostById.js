const rescue = require('express-rescue');

const { putBlogPostByIdService } = require('../services');

const putBlogPostById = rescue(async (req, res, _next) => {
  const { title, content } = req.body;

  const { id } = req.params;

  const user = req.user.dataValues;

  const updatedPost = await putBlogPostByIdService(title, content, id, user);

  return res.status(200).json(updatedPost);
});

module.exports = putBlogPostById;