const rescue = require('express-rescue');

const { getAllBlogPostService } = require('../services');

const getAllBlogPost = rescue(async (_req, res, _next) => {
  const allPosts = await getAllBlogPostService();

  return res.status(200).json(allPosts);
});

module.exports = getAllBlogPost;