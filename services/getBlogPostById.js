const { BlogPost, User, Category } = require('../models');

const getBlogPostById = async (id) => {
  const post = await BlogPost
    .findOne({ where: { id },
      include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }] });

  if (!post) {
    const error = {
      code: 'notFound',
      message: 'Post does not exist',
    };
    throw error;
  }

  return post;
};

module.exports = getBlogPostById;