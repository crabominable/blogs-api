const rescue = require('express-rescue');

const { getBlogPostBySearchService } = require('../services');

const getBlogPostBySearch = rescue(async (req, res, _next) => {
  const { q } = req.query;

  const post = await getBlogPostBySearchService(q);

  return res.status(200).json(post);
});

module.exports = getBlogPostBySearch;