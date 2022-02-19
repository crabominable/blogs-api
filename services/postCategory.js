const { Category } = require('../models');

const postCategory = async (name) => {
  const category = await Category.create({ name });

  return category;
};

module.exports = postCategory;