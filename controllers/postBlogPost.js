const rescue = require('express-rescue');

const { postBlogPostService } = require('../services');

const postBlogPost = rescue(async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;

  const { id } = req.user;

  const post = await postBlogPostService(title, content, categoryIds, id);

  return res.status(201).json(post);
});

module.exports = postBlogPost;