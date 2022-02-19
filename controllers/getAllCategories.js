const rescue = require('express-rescue');

const { getAllCategoriesService } = require('../services');

const getAllCategories = rescue(async (_req, res, _next) => {
  const allCategories = await getAllCategoriesService();

  return res.status(200).json(allCategories);
});

module.exports = getAllCategories;