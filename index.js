const express = require('express');

const { postUser,
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
  getBlogPostBySearch } = require('./controllers');

const { validateUserDisplayName,
  validateUserEmail,
  validateUserPassword } = require('./middlewares/postUserValidation');
const { validateLoginEmail,
  validateLoginPassword } = require('./middlewares/postLoginValidation');
const { validateToken } = require('./middlewares/tokenValidation');
const { validateCategoryName } = require('./middlewares/postCategoryValidation');
const postBlogPostValidation = require('./middlewares/postBlogPostValidation');
const validateWithUserToken = require('./middlewares/tokenWithUserValidation');
const putBlogPostValidation = require('./middlewares/putBlogPostValidation');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// REQUISITO 1
app.post('/user', validateUserDisplayName,
  validateUserEmail,
  validateUserPassword, postUser);
//

// REQUISITO 2
app.post('/login', validateLoginEmail,
  validateLoginPassword, postLogin);
//

// REQUISITO 3
  app.get('/user', validateToken, getAllUser);
//

// REQUISITO 4
  app.get('/user/:id', validateToken, getUserById);
//

// REQUISITO 5
  app.post('/categories', validateToken, validateCategoryName, postCategory);
//

// REQUISITO 6
  app.get('/categories', validateToken, getAllCategories);
//

// REQUISITO 7
  app.post('/post', validateWithUserToken, postBlogPostValidation, postBlogPost);
//

// REQUISITO 13
  app.get('/post/search', validateToken, getBlogPostBySearch);
//

// REQUISITO 8
  app.get('/post', validateToken, getAllBlogPost);
//

// REQUISITO 9
  app.get('/post/:id', validateToken, getBlogPostById);
//

// REQUISITO 10
  app.put('/post/:id', validateWithUserToken, putBlogPostValidation, putBlogPostById);
//

// REQUISITO 11
  app.delete('/post/:id', validateWithUserToken, deleteBlogPost);
//

// REQUISITO 12
  app.delete('/user/me', validateWithUserToken, deleteUser);
//

// MIDDLEWARE DE ERRO
  app.use(errorMiddleware);
//