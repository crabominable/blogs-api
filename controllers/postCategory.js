const rescue = require('express-rescue');

const { postCategoryService } = require('../services');

const postCategory = rescue(async (req, res, _next) => {
  const { name } = req.body;

  const category = await postCategoryService(name);

  return res.status(201).json(category);
});

module.exports = postCategory;