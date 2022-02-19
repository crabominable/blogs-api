const postUser = require('./postUser');
const postLogin = require('./postLogin');
const getAllUser = require('./getAllUser');
const getUserById = require('./getUserById');
const postCategory = require('./postCategory');
const getAllCategories = require('./getAllCategories');
const postBlogPost = require('./postBlogPost');
const getAllBlogPost = require('./getAllBlogPost');
const getBlogPostById = require('./getBlogPostById');
const putBlogPostById = require('./putBlogPostById');
const deleteBlogPost = require('./deleteBlogPost');
const deleteUser = require('./deleteUser');
const getBlogPostBySearch = require('./getBlogPostBySearch');

module.exports = {
  postUser,
  postLogin,
  getAllUser,
  getUserById,
  postCategory,
  getAllCategories,
  postBlogPost,
  getAllBlogPost,
  getBlogPostById,
  putBlogPostById,
  deleteBlogPost,
  deleteUser,
  getBlogPostBySearch,
};