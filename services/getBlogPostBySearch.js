const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const associations = [
  { model: User, as: 'user' },
  { model: Category, as: 'categories', through: { attributes: [] } },
];

const getBlogPostBySearch = async (search) => {
  let posts;

  if (!search) {
    posts = await BlogPost.findAll({ include: associations });
  } else {
    posts = await BlogPost.findAll({
      where: { [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } },
        ],
      },
      include: associations,
    });
    // console.log(posts);
  }
  return posts;
};

module.exports = getBlogPostBySearch;