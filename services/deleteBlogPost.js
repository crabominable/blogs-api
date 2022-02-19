const { BlogPost } = require('../models');

const deleteBlogPost = async (id, userId) => {
  const post = await BlogPost.findByPk(id, { attributes: ['userId'] });

  if (!post) {
    const error = {
      code: 'notFound',
      message: 'Post does not exist',
    };
    throw error;
  }

  if (post.userId !== userId) {
    const error = {
      code: 'invalidToken',
      message: 'Unauthorized user',
    };
    throw error;
  }

  await BlogPost.destroy({ where: { id } });
};

module.exports = deleteBlogPost;