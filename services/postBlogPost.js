const { Category, BlogPost } = require('../models');

const postBlogPost = async (title, content, categoryIds, userId) => {
  const verifyCategoryIds = [];

  await Promise.all(
    categoryIds
      .map(async (id) => verifyCategoryIds.push(await Category.findOne({ where: { id } }))),
  );
  verifyCategoryIds.forEach((item) => {
    if (!item) {
      const error = {
        code: 'invalidFields',
        message: '"categoryIds" not found',
      };
      throw error;
    }
  });
  const post = await BlogPost.create({ title, content, userId });

  return post;
};

module.exports = postBlogPost;