const { BlogPost, Category } = require('../models');

const putBlogPostById = async (title, content, id, user) => {
  const post = await BlogPost.findOne({ where: { id } });

  if (post.userId !== user.id) {
    const error = {
      code: 'invalidToken',
      message: 'Unauthorized user',
      };
    throw error;
  }

  await BlogPost.update({ title, content }, { where: { id } });
  // console.log(updatedUser);
  const updatedPost = await BlogPost.findByPk(id, {
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return updatedPost;
};

module.exports = putBlogPostById;